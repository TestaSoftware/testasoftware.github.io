---
title: Recursion Using C# Lambda Expressions
slug: 2013-09-10-recursion-using-c-lambda-expressions
image: /assets/images/blog/thumbnails/fractal.jpg
date: 2013-09-10
categories: ["development", "c#"]
---
Recursion can sometimes hurt the brain. Here is a clear and concise way to do recursion using C# lambdas and linq. 
Let's start with a common scenario, recursing through a tree. Imagine that we've got a tree of "Nodes". <!--more-->For 
our purposes a Node is just a simple class that has an Id and a way to identify its parent Node (via ParentId in this case).

```csharp
// pseudo code for an example tree node
class Node 
{
  int Id;
    int ParentId;
}
```

Simple enough so far...  

We remember that we need to use recursion to traverse the tree. We could write code that explicitly gets a set 
of child nodes. Then paste that snippet in half-a-dozen times to get all the nested children that branches who knows 
how far down. Then a user comes along and alters the tree and even more nested children get created. It's back to the 
clipboard to paste in some more of that garbage code.

No, no, no... We know better... recursion is the correct way to go. For whatever reason recursion hurts the brain and 
you can never quite seem to remember how to do it correctly. The reason for that? Recursion just doesn't seem to ever 
lend itself to readability. If we can read something clearly we can understand it more easily. Using lambda expressions 
and linq help us get that clarity. Take the example below...

```csharp
// recursion lambda
Action<node> traverse = null;
traverse = (node) =>
{
  // do something with the node here...

  // continue traversing
  tree.Where(child => child.ParentId == node.Id)
      .ForEach(traverse);
};
```

The code above is clear and concise. It makes it obvious as to what is going on: get all of the children for a particular 
node in a tree; for each of the children run the same function to get their children as well; do that over and over until
 we've traversed the entire tree. Code we can read like this is code we can easily write again. Note that we don't need 
to worry about a stopping condition, because our foreach loop serves in its place.

Now that we've defined our lambda all that's left to do is run our traversal against whatever root node we would like!

```csharp
// run it
traverse(tree.rootNode);
```