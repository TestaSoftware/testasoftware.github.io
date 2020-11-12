---
layout: post
title: Linq Helpers for IEnumerable
image: /assets/images/blog/thumbnails/blog2.jpg
date: 2015-08-24
---

Linq is awesome. Especially considering I tend to think functionally. Go out and experiment with something like Haskell if <!--more-->you're a procedural programmer. There are plenty of functional languages out there, but Haskell seems to try the hardest to be functionally pure. Any functional language, however, can really widen your perspective on programming.  

Anyway, I write a lot code using of Linq (to objects specifically). Particularly, I like the fluent syntax. One of the more common operations I'll perform is to iterate over a collection. Linq to objects will generally return an IEnumerable&lt;T&gt;. This is all well and good until I want to run a Linq ForEach on top of the collection. Usually everything needs to get casted as a List and then we can ForEach over top of that.     
	 
I'm usually so consumed in the task at hand that I forget to write and share these simple time-savers. Because this operation is so common for me, I wrote up some simple C# extensions on top of IEnumerable that replace this extra needless Linq.  

**The IEnumerable Extensions**  
<script src="https://gist.github.com/stesta/a7006d96fe2415e15279.js"></script>  
 
**Basic Usage**  
<script src="https://gist.github.com/stesta/6ec32c49e3161b77b18c.js"></script>  
 
**Usage Including Indexes**  
<script src="https://gist.github.com/stesta/05e42eebe5719241a8c7.js"></script>  

Simple and easy! Please feel free to share and use! (obligatory disclaimer about me not being responsible for your production code, blah, blah...)  