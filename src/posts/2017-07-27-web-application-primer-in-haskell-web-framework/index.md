---
title: Web Application Primer in Haskell - Web Framework
slug: 2017-07-27-web-application-primer-in-haskell-web-framework
image: /assets/images/blog/thumbnails/haskell.png
date: 2017-07-27
---

There are plenty of choices when it comes to Haskell web frameworks: yesod, spock, snap, happstack - just to name a few.<!--more--> The [Haskell Wiki][webFrameworks] provides a list of descriptions and differences between some of the web frameworks out there. 

- Heroku  
  - Docker  
    - React + ES6  
    - **Snap Framework + Heist + Websockets**
    - [Haskell][goh-haskell]

Web Framework: Snap Framework
-----------------------------

I spent a little bit of time researching the various frameworks to determine if there was an outright favorite. Nope. It was a bit of a tough decision. I wanted a framework that was easy to get up and running quickly and would be extensible enough for future projects. Yesod seemed like a great option, but they lost me on the [Shakespearean Template Languages][shakespearean-templates]. That particular flavor of templating just isn't for me. Maybe I'll change my mind in the future. I suggest you decide for yourself what works best for you and your situation.

Ultimately, I landed on the [Snap Framework][snapFramework]. For me, the Snap felt lightweight enough to get up and running quickly without too much ceremony. Getting an HTTP server up and running along with some simple routing is a breeze. Additionally, Snap's templating system (Heist) felt very natural to me. 

As far as extensibility goes, they have a concept of [Snaplets][snaplets]. Snaplets allow you to build self-contained bits of additional functionality. When it comes time to add in things like sessions and authentication you can do so easily via built-in Snaplets (or write your own). Third-party Snaplets seemed readily available and easy to find. 

On to the code!

### Setting up a Basic HTTP Server

For the basic Snap site setup I have chosen to break things out into three files in order to have a clear separation of concerns. To be fair I saw this convention somewhere... liked it... and subsequently ripped it off! :)   

The three files summarize as follows:  

**Main.hs**  

The entry point for our application is very simple. All we're doing here is serving up our website via the `serveSnaplet` function which takes in a server configuration and a snaplet initializer. For the server configuration we're just using the `defaultConfig`. The snaplet initializer (`siteInit`) is defined a little further below.  

<script src="https://gist.github.com/stesta/a977a111bb3f19fd905d79d34cefa5d6.js"></script>  

**Application.hs**  

This file defines a data structure we can use to hold the state for our application. The App data structure will contain the state of all the snaplets we intend to user and in-turn wrap them all up as a Snaplet. Note that I don't understand the technical reasons, but the field names all need to begin with an underscore. Following that up with the `makeLenses` helper lets us call those field names *without* an underscore throughout the rest of our application.  

<script src="https://gist.github.com/stesta/d6b663f1250ed43d83ff5586147029df.js"></script>  

The Application.hs is also where we've instanced out Heist and added a convenience type synonym called `AppHandler`.

**Site.hs**

Finally, we define a Site.hs to house our Snaplet initializer to initialize our site. When making this top level Snaplet the first the we end up doing is to initialize all of the nested Snaplets our site will use. In this case we're only initializing the Heist Snaplet for templating. Then there's some basic routing. Finally, a return of the resulting `App` state data structure.  

<script src="https://gist.github.com/stesta/788a47d694447c01b1e368f78aa8309a.js"></script>  

### Setting up Websockets

I could have used REST here. It is easy to create an REST API as a Snaplet. For the purposes for the Game of Haskell, however, I needed (wanted) something a little more real-time. 

Websockets are the no-brainer client-server communication protocol for the web. Packages are available to add websocket support in for Haskell as well as a corresponding Snaplet to plug in to our application.

If you review our site initializer you will find the `gameoflife` route. It points to an `AppHandler`. The handler runs a web socket `ServerApp`. The server app continually listens for new messages, expecting an integer to be sent across the wire, and returns the corresponding game state. The game state itself is packaged up as JSON using the [aeson][aeson] Haskell library.  

<script src="https://gist.github.com/stesta/b38b9fd526a1142298a0f494a0475906.js"></script>  

### Templating via Heist 

For webpage and HTML templating [Heist][heist] was a natural choice because it was developed by the same folks who wrote Snap and you get it bundled for free. Heist as a template engine was a selling point for me regarding Snap. The `bind` and `apply-content` features make it possible to build a series of nested templates. When you couple all of that with `splices`, which basically let you call Haskell code from your templates, you have a really powerful system. 



[webFrameworks]: https://wiki.haskell.org/Web/Frameworks
[shakespearean-templates]: https://www.yesodweb.com/book/shakespearean-templates
[snapFramework]: http://snapframework.com/
[snaplets]: http://snapframework.com/snaplets
[heist]: http://snapframework.com/docs/tutorials/heist
[goh-haskell]: /steve/blog/web-application-primer-in-haskell-programming-language  
[aeson]: #
