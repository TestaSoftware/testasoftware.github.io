---
title: Thinking Functionally with LINQ
slug: 2015-09-01-thinking-functionally-with-linq
image: /assets/images/blog/thumbnails/thinking.jpg
date: 2015-09-01
---

What would you do if I asked you to complete a task across a collection of objects without using a foreach loop? Or any loop<!--more-->ing construct at all for that matter? More importantly, why does it matter?  

In my last post, [Linq Helpers for IEnumerable](/steve/blog/linq-helpers-for-IEnumerable/), I mentioned that LINQ to Objects was particularly appealing to me. Per MSDN (and they're spot on), LINQ queries offer three main advantages over the more procedural foreach loops:  

  1. They are more concise and readable, especially when filtering multiple conditions.  
  2. They provide powerful filtering, ordering, and grouping capabilities with a minimum of application code.   
  3. They can be ported to other data sources with little or no modification 

For me LINQ means that I can take piece of procedural code, such as a complex series of foreach loops, and break them down into clear declarative statements. Foreach loops certainly have their place, but can often be replaced by functional statements that make code much more readable. 

### The Map Function  

Before we dig in to a LINQ example, let's go over a couple basic functions. In functional programming, one of the most common functions is the map function. Wikipedia has a nice concise definition.
 
> map is the name of a higher-order function that applies a given function to each element of a list, returning a list of results. It is often called apply-to-all when considered in functional form.

The effective impact of map is that it allows functional programmers to avoid looping constructs while working with lists and define the logic in a declarative way. This what a map looks like in Haskell:  
  
```haskell
-- | create a function that squares the input
let square x = x * x

-- | apply the square function to all elements
map square [1,2,3,4,5]

-- | outputs: [1,4,9,16,25]
```  

(Just a quick side note, this code will not actually manipulate elements in a list. In the functional world everything is immutable. So in this case we're actually creating an entirely new list.)  

### The Filter Function  

The filter function is also another common function we can use against a list to pare it down to the items we care about. Once again Wikipedia provides us with a nice definition.

> filter is a higher-order function that processes a data structure (typically a list) in some order to produce a new data structure containing exactly those elements of the original data structure for which a given predicate returns the boolean value true.

```haskell
-- | start with a boolean predicate that acts as our filter criteria
let isEven n = n `mod` 2 == 0

-- | execute the filter function
filter isEven [1,2,3,4,5]

-- | Haskell filtering using lambdas
filter (\n -> n `mod` 2 == 0) [1,2,3,4,5]

-- | outputs: [2,4]
```

Functional LINQ
---------------

So how do these concepts transfer to LINQ? Here's a real-world example. I came across this bit of code in my day job. It has been modified only slightly to make things a little less complex and the problem space a little more understandable. There's nothing inherently wrong with the code. After all, it does in fact work. It was just written by someone who is used to thinking imperatively versus functionally. The biggest issue I have with the code is that it's difficult to read and understand at a glance. As developers, we much more of our time reading code as opposed to writing code. That makes it extremely important that we write concise and understandable code.

Here is the basic gist of what is happening in the code I came across. In our system, Users can follow Accounts (companies). By following an Account a User is essentially following a list of people who are employed by that Account. To summarize what's going on, the code in question is attempting to get parse a list of paged search results. The list of results contains a list of Users who are following the searched account(s). For each person under those accounts some action is performed.  

```csharp
foreach (var page in searchResults) 
{
  if (page.Users != null && page.Users.Count > 0) // some basic checking
  {
    foreach(var user in result.Users)
    {
      // note: We perform the following because the account ids 
      // that a user follows are stored as a comma separated value.
      // The GetFollowedAccountIds is another method elsewhere in the class  
      // and its implementation is irrelevant
      var followedAccountIds = GetFollowedAccountIds(user).Split(','); 
      
      foreach (var accountId in followedAccountIds)
      {
        var account = GetAccount(accountId);
        
        // Perform some action against the followed Account's list of users
        // Note that our particular action also requires the user following the account
        MyAction(user, account.Users);
      }
    }
  }
}
```  

We can actually cut out almost all of the foreach logic by employing the functional concepts that we mentioned earlier. In our case, the foreach loops are really just querying some data. LINQ makes a lot of sense here. After all LINQ does stand for Language INtegrated Query. In order to begin to harness the true power of LINQ your view needs to be shifted. LINQ isn't merely a SQL in code. It's a query language for sure, but one that it both extremely expressive and functionally oriented. Especially when using the fluent syntax. 

The LINQ Select method corresponds almost directly to map. The LINQ Where clause corresponds closely to filter. In the example below, I also make use of the SelectMany clause. The basic idea behind a SelectMany is that it will project each element of a sequence to an IEnumerable&lt;T&gt; and flatten the resulting sequences into one sequence. For example, when the paged list of users is returned in the results instead of getting back an IEnumberable&lt;IEnumerable&lt;User&gt;&gt; (a list of lists) we just get back a single concatenated IEnumerable&lt;User&gt;     

```csharp
// this first statement pull back an IEnumerable<User>
// this single LINQ query cuts out the first two nested ForEach loops in our impertive code
var users = searchResults
              .Where(sr => sr.Users != null && sr.Users.Count > 0)
              .SelectMany(sr => sr.Users);

// with our second LINQ query we're pulling back an IEnumerable<`a> 
// where `a is anonymous type comprised of User and Account derived from the AccountIds
var followedAccounts = users
                        .Select(user => new { User = user, Ids = GetFollowedAccountIds(user).Split(',') })
                        .SelectMany(item => item.Ids.Select(id => new { User = item.User, Account = GetAccount(id) }));
                        
// In this last step we are perform some Action or business logic against the final results
// this is the proper place to employ a ForEach
followedAccounts
  .ForEach(item => MyAction(item.User, item.Account.Users));
```  

Note that at the end of the code we are in fact using a ForEach mentioned in my last post. If you paid close attention you'll remember that a ForEach that executes an Action is completely acceptable use case. In the case of Actions we're not really selecting or projecting in a functional manner.   

It's possible to get even terser with the code. We can get the logic down to six lines of code (or one giant one-liner depending on how you look at it). However, generally I like to stick to the previous code example style just to keep things as clear as possible.  

```csharp
searchResults
  .Where(sr => sr.Users != null && sr.Users.Count > 0)
  .SelectMany(sr => sr.Users);
  .Select(user => new { User = user, Ids = GetFollowedAccountIds(user).Split(',') })
  .SelectMany(item => item.Ids.Select(id => new { User = item.User, Account = GetAccount(id) }));
  .ForEach(item => MyAction(item.User, item.Account.Users));
```  

That's all for now! Happy coding!   