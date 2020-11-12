---
layout: post
title: Adding Multi-Level Menus to Bootstrap 3 and the Roots Theme Engine
image: /assets/images/blog/thumbnails/menu1.jpg
date: 2014-05-06
---
Very recently I had a request to do some work on a WordPress site. Granted, I'm not a fan of WordPress, but whatcha gonna do<!--more--> ? 
(Note: that "not a fan" is an understatement... php?!... really?!?!) Because I'm not a fan, my experience with WordPress is incredibly limited. 
My Google adventures eventually led me to the [Roots](http://roots.io) theme engine. Roots was able to get me up and running fairly quickly. It's 
used a lot of technologies that I was already comfortable with. HTML5, Grunt and Bootstrap were the big sellers for me.  

Theming itself went pretty smoothly. Grunt compiled all my less for me, bootstrap provided a comfortable styling environment and the theme was easy 
enough to zip up and deploy. There was a hang up, however, when I realized that Bootstrap 3 dropped support for multi-level menus. Doesn't sound like a 
big deal until the client demands it. Now I'm sure this would have been easier for you WordPress gurus out there, but it took me long enough that I felt 
I should blog about it. Maybe it'll help someone else.  

There were plenty of solutions out there, but after all of my Googling I opted for a pure css solution. My browser testing all went well. This solution 
even fit well into the responsive design. It was comfortable to navigate both on my Windows Phone and my Google Nexus tablet.  

I was able to drop this css right into my theme. (credit: [bootsnipp](http://bootsnipp.com/snippets/featured/multi-level-dropdown-menu-bs3"))  

<script src="https://gist.github.com/stesta/8ab822d72b03e130e60a.js"></script>

All that was really left for me to do was to modify the lib/nav.php file to apply the appropriate 'dropdown-submenu' class attribute to the sub-menus.  

<script src="https://gist.github.com/stesta/7cea5868830defe02c05.js"></script>

Hopefully this will be helpful to someone out there!  