---
title: Adding Multi-Level Menus to Bootstrap 3 and the Roots Theme Engine
slug: 2014-05-06-adding-multi-level-menus-to-bootstrap-3-and-the-roots-theme-engine
image: /assets/images/blog/thumbnails/menu1.jpg
date: 2014-05-06
categories: ["development", "php", "wordpress"]
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

```css
.dropdown-submenu {
    position: relative;
}

.dropdown-submenu>.dropdown-menu {
    top: 0;
    left: 100%;
    margin-top: -6px;
    margin-left: -1px;
    -webkit-border-radius: 0 6px 6px 6px;
    -moz-border-radius: 0 6px 6px;
    border-radius: 0 6px 6px 6px;
}

.dropdown-submenu:hover>.dropdown-menu {
    display: block;
}

.dropdown-submenu>a:after {
    display: block;
    content: " ";
    float: right;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 5px 0 5px 5px;
    border-left-color: #ccc;
    margin-top: 5px;
    margin-right: -10px;
}

.dropdown-submenu:hover>a:after {
    border-left-color: #fff;
}

.dropdown-submenu.pull-left {
    float: none;
}

.dropdown-submenu.pull-left>.dropdown-menu {
    left: -100%;
    margin-left: 10px;
    -webkit-border-radius: 6px 0 6px 6px;
    -moz-border-radius: 6px 0 6px 6px;
    border-radius: 6px 0 6px 6px;
}
```

All that was really left for me to do was to modify the lib/nav.php file to apply the appropriate 'dropdown-submenu' class attribute to the sub-menus.  

```php
// fixed the classes assigned to dropdown (around line 44)
if ($element->is_dropdown && $depth !== 0) {
    $element->classes[] = 'dropdown-submenu';
}
elseif ($element->is_dropdown) { 
    $element->classes[] = 'dropdown'; 
}

// set menu depth from 2 to n (around line 84)
$roots_nav_menu_args['depth'] = 3;
```

Hopefully this will be helpful to someone out there!  