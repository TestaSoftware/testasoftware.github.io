export const frontmatter = {
    title: "Web Application Primer in Haskell - Haskell",
    description: "",
    image: "/assets/images/blog/thumbnails/haskell.png",
    date: "2017-07-03",
    tags: ["web development", "haskell"]
}

In this series, we're going to work our way through the development stack bottom-up. So to kick off our Haskell web application primer we're going to start with Haskell and core Game of Life code.

- Heroku  
  - Docker  
    - React + ES6  
    - Snap Framework + Heist + Websockets  
    - **Haskell**

### Programming Language: Haskell

I'm relatively new to it, but I love Haskell! I drank the kool-aid. As mentioned previously Haskell is the foundation we're building on. When it comes to Haskell I'm certainly a hobbyist - so don't take any code provided as gospel or even best practice. This is just what I did to get a web application up and running in a manner that would be repeatable in the future on other projects. 

We'll talk more about the web application pieces in the next post. For this post we're really only going to focus on the core functionality of our Game of Life clone. 

### The Game of Haskell: Our Core Code Base

I'm going to assume that the reader already has a working knowledge of Conway's Game of Life. If you're not sure what the Game of Life is, you can checkout the [wikipedia link here][gameOfLife].

Moving on ...  

I've broken down two core types (Type Synonyms more specifically) for this program: a cell and a board

- A cell is simply a tuple that maintains and `x` and `y` position. 
- A board is a list of the living cells in the current generation.

In Haskell these types were very easy to define using two Type Synonyms:  

```haskell
type Cell = (Int, Int)
type Board = [Cell]
```

The board's definition is an effort to avoid a fixed array size for the game. By only tracking the living cells we can manage a board that is arbitrarily large. The downside to this approach is that the calculations and rendering can slow down when there are high number of living cells. As of yet, I've made no effort to correct for that problem.  

What this means for our code is that we are unable to just loop through a fixed board array and run our life/death/birth calculation for each node in that board. Instead, we need to run that calculation for every living cell and each of their dead neighbors since those dead neighbors stand a chance of being "born". 

This approach makes things particularly concise to define in Haskell. I'm sure this could be code golfed to something more cleverly implemented, but here's the approach I took. 

The live or die code is straight forward. I wrote a function that takes in a board and a single cell and returns a boolean as to whether that particular cell should live or die (or be born) for the next generation. 

```haskell
liveOrDie :: Board -> Cell -> Bool
liveOrDie board cell 
    | alive && ns     == 2 = True
    | alive && ns     == 3 = True
    | not alive && ns == 3 = True
    | otherwise            = False 
    where 
        alive = isAlive board cell 
        ns    = aliveNeighborCount board cell
```

As you can see from the code, using guards we can very clearly define the standard set of rules for the Game of Life. Ultimately, everything boils down to whether or not the cell is alive and the alive neighbor count (`ns`). There are a few helper functions being used - namely: `isAlive` and `aliveNeighborCount`. You can review the full implementation in [the source code][gameOfHaskell-Core]. They are fairly straightforward -  `isAlive` basically looks to see if the the cell exists on the current board and `aliveNeighboardCount` makes that same check against all of the neighboring cells. 

Once we have our `liveOrDie` function defined it was easy enough to use the State Monad to calculate what the next generation of a board should look like and put that into the next state. 

```haskell
generation :: State Board Board
generation = do 
    board <- get
    let deadNeighbors = nub $ filter (not . isAlive board) $ concatMap neighbors board
    put $ filter (liveOrDie board) $ board ++ deadNeighbors
    return board 
```

We get all of the surrounding dead neighbors. For each of the dead neighbors and the currently living cells, we filter out only the cells that should live for the next generation and that becomes our new board. 

The last thing I did was to create one final function that again uses a State Monad to compute not just a single generation, but also recurisively defines an infinite list of all future generations. Haskell's laziness for the win! 

```haskell
generations :: State Board [Board]
generations = do 
    board <- generation 
    future <- generations
    return (board : future)
```

If you've pulled down my [source code][gameOfHaskell-FullSource] you can test all this by loading Core.hs into the ghci 

```bash
> ghci
GHCi, version 8.0.2: http://www.haskell.org/ghc/  :? for help

Prelude> :l src/GameOfHaskell/Core.hs
```

Then use `evalState` and the List Index (subscript) operator `!!` to access individual generations of a board. The example below loads in and accesses generations from the "acorn" pattern: 

```haskell
-- load in a game state
*GameOfHaskell.Core> let game = evalState generations [(0,2),(1,0),(1,2),(3,1),(4,2),(5,2),(6,2)]  

-- access individual generations 
*GameOfHaskell.Core> game!!0 
[(0,2),(1,0),(1,2),(3,1),(4,2),(5,2),(6,2)] 
*GameOfHaskell.Core> game!!1
[(4,2),(5,2),(0,1),(1,1),(2,1),(4,1),(5,1),(5,3)]
```

The only other code I've really included was some basic Game of Life patterns. These are defined with an origin of (0,0) being the upper-left hand cell of the grid. I've included a simple `translatePattern` function to translate the pattern to some other point on the board. You can see all that pattern code here.

Next up we'll talk about how the web framework was set up around this core code. 


[gameOfLife]: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life 
[gameOfHaskell-Core]: https://github.com/stesta/GameOfLife/blob/master/src/GameOfHaskell/Core.hs
[gameOfHaskell-Patterns]: https://github.com/stesta/GameOfLife/blob/master/src/GameOfHaskell/Patterns.hs
[gameOfHaskell-FullSource]: https://github.com/stesta/GameOfLife