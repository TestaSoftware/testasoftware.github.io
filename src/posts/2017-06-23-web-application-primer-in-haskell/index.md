---
title: Web Application Primer in Haskell - Overview
slug: 2017-06-23-web-application-primer-in-haskell
image: /assets/images/blog/thumbnails/haskell.png
date: 2017-06-23
---

In this upcoming series of posts we're going to go over the end-to-end process on how to build and deploy a web application using Haskell.<!--more--> I use the term "web application" instead of "website" because the implication is that we're building something more than just some static HTML and CSS. The intent is to build an actual application with dynamic front-end behavior that is in direct communication with the back-end code. 

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

### **Live demo** deployed to [Heroku][liveDemo]  

Next up: [Haskell and our Core Code][goh-haskell]

[gameOfLife]: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life 
[liveDemo]: http://game-of-haskell.herokuapp.com
[sourceCode]: https://github.com/stesta/GameOfLife 
[dockerImage]: https://hub.docker.com/r/stesta/gameoflife/
[goh-haskell]: /steve/blog/web-application-primer-in-haskell-programming-language  