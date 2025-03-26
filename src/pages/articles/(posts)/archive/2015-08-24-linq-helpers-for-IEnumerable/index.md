---
title: Linq Helpers for IEnumerable
slug: 2015-08-24-linq-helpers-for-IEnumerable
image: /assets/images/blog/thumbnails/blog2.jpg
date: 2015-08-24
categories: ["development", "c#"]
---

Linq is awesome. Especially considering I tend to think functionally. Go out and experiment with something like Haskell if <!--more-->you're a procedural programmer. There are plenty of functional languages out there, but Haskell seems to try the hardest to be functionally pure. Any functional language, however, can really widen your perspective on programming.  

Anyway, I write a lot code using of Linq (to objects specifically). Particularly, I like the fluent syntax. One of the more common operations I'll perform is to iterate over a collection. Linq to objects will generally return an IEnumerable&lt;T&gt;. This is all well and good until I want to run a Linq ForEach on top of the collection. Usually everything needs to get casted as a List and then we can ForEach over top of that.     
	 
I'm usually so consumed in the task at hand that I forget to write and share these simple time-savers. Because this operation is so common for me, I wrote up some simple C# extensions on top of IEnumerable that replace this extra needless Linq.  

**The IEnumerable Extensions**  
```csharp
public static class IEnumerableExtensions
{
    public static void ForEach<T>(this IEnumerable<T> items, Action<T> action)
    {
        foreach (var item in items)
        {
            action(item);
        }
    }

    public static void ForEach<T>(this IEnumerable<T> items, Action<T,int> action)
    {
        foreach (var item in items.Select((i,idx) => new { i, idx }))
        {
            action(item.i, item.idx);
        }
    }
}
```
 
**Basic Usage**  
```csharp
var items = new List<object>()
{
  // ...
};

// old way...
items
  .OrderBy(item => item.SomeOrderValue)
  .ToList()
  .ForEach(i => 
  {
    // do somethings
    var item = i;
  });

// new way ForEach over an IEnumerable
items
  .OrderBy(item => item.SomeOrderValue) // some linq that returns an IEnumerable<object>
  .ForEach(i => 
  {
    // do something
    var item = i;
  });
```
 
**Usage Including Indexes**  
```csharp
var items = new List<object>()
{
  // ...
};

// old way...
items
  .OrderBy(item => item.SomeOrderValue) // some linq that returns an IEnumerable<object>
  .Select((item, idx) => new { item, idx })
  .ToList()
  .ForEach((i) => 
  {
    // do something
    var item = i.item;
    var index = i.idx;
  });

// ForEach over an IEnumerable that includes an index
items
  .OrderBy(item => item.SomeOrderValue) // some linq that returns an IEnumerable<object>
  .ForEach((i, idx) => 
  {
    // do something
    // however this time idx returns our index value in our foreach loop
    var item = i;
    var index = idx;
  });
```

Simple and easy! Please feel free to share and use! (obligatory disclaimer about me not being responsible for your production code, blah, blah...)  