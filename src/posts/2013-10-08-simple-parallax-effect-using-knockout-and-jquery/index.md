---
title: Simple Parallax Effect Using Knockout and jQuery
slug: 2013-10-08-simple-parallax-effect-using-knockout-and-jquery
image: /assets/images/blog/thumbnails/parallax.gif
date: 2013-10-08
---
Using [parallax](http://en.wikipedia.org/wiki/Parallax) shift has become a popular effect lately. It's popularity has risen as a design choice across the web and has<!--more--> even 
made its way into the new iOS7. The concept is relatively simple: elements on the screen move and scroll at different rates to give the illusion of depth.&nbsp;</p>

In the following example the basic idea to achieve our desired effect is that we're going to bind a function to the scroll event. That 
function will move an element by some defined factor. The jQuery example below will give you an idea of how this works. In our example 
below we are altering the background image position of a given element and moving it around faster (by a factor of .5) than the rest of 
the elements on the page when we start scrolling.

```javascript
$(window).bind('scroll', function(e) {
  $('#myElement').css('background-position', '0px' + (0 - (document.body.scrollTop * .5)) + 'px');
});
```

Note that background position is not the only way to move an element on a page. We could have just as easily decided to move our element 
based on the css property 'top' or 'left' to move and element vertically or horizontally on the page. You can see an example of this on 
the first demo (link at the bottom of this post).

and just because Knockout.js is awesome let's make a binding handler to easily apply our effect.

```javascript
ko.bindingHandlers.parallax = {
  init: function(element, valueAccessor) {
      var value = valueAccessor();

      $(window).bind('scroll', function(e) {
        $(element).css('background-position', '0px' + (0 - (document.body.scrollTop * value.speed)) + 'px');
      });
  }
};
```
The usage of this binding handler is relatively straight forward. We simply apply our binding handler to an element and specify a value 
to represent the speed of the parallax shift.

```javascript
<style type="text/css>
  #parallax-bg {
    height:200px;
    background-image('my-background.jpg');
  }
</style>

<div id="parallax-bg" data-bind="parallax: { speed: .65 }"></div>;
```

**SHOW ME THE CODE!**

Here are a couple pages that demonstrate the technique: [Demo 1](/assets/images/blog/parallax/parallax_demo.html) and [Demo 2](/assets/images/blog/parallax/parallax_demo_1.html)