
export const frontmatter = {
    title: "Web Application Primer in Haskell - Overview",
    description: "",
    image: "/assets/images/blog/thumbnails/haskell.png",
    date: new Date(2017, 6, 23),
    tags: ["web development", "haskell"]
}

In this upcoming series of posts we're going to go over the end-to-end process on how to build and deploy a web application using Haskell. I use the term "web application" instead of "website" because the implication is that we're building something more than just some static HTML and CSS. The intent is to build an actual application with dynamic front-end behavior that is in direct communication with the back-end code.

In order to learn more about Haskell I decided to try and write a glorified Hello World program in the form of [Conway's Game of Life][gameoflife]. The original iteration was console based, but I quickly began yearning for something a little more gratifying visually. Hence, the Game of Haskell webapp was born!  

Technology Stack
----------------

It was important early on to make some very opinionated decisions regarding the technology stack. The following framework decisions represent my attempts at learning as many new things as possible with the caveat that these descisions should result in a new, reusable, robust and flexible toolbelt that can be applied toward future Haskell web development. 

Here's the hierarchy of how this application was built:

- Heroku  
  - Docker  
    - [React + ES6][]  
    - [Snap Framework + Heist + Websockets][]  
    - [Haskell][goh-haskell]  

### **Source code** hosted on [Github][sourceCode]  

### **Pre-built image** available via [Docker Hub][dockerImage]  
```
docker pull stesta/gameoflife 
```

### **Live demo** deployed to <Link href="http://game-of-haskell.herokuapp.com" variant="link" size="none">Heroku</Link>



[gameOfLife]: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
[sourceCode]: https://github.com/stesta/GameOfLife 
[dockerImage]: https://hub.docker.com/r/stesta/gameoflife/