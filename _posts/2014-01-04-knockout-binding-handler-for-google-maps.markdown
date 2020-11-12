---
layout: post
title: Knockout Binding Handler for Google Maps
image: /assets/images/blog/thumbnails/boxing.jpg
date: 2014-01-04
---
Knockout Binding Handlers, FTW!

Very recently a client request came in for some new 'maps' features to their existing site. <!--more-->Their site is a C#/.NET 
4.0 backend with a knockout.js frontend. They have a series of pages that represent their locations. To accompany the location 
information they wanted to display an interactive map. Google maps makes this easy enough, but with knockout it was even easier!

First the data. To position a map we're going to need latitude and longitude. Google makes this process super easy with their 
geo-coding services. We start with a model to represent our location...

<script src="https://gist.github.com/stesta/b611de1f28ff377a2dee.js"></script> 

Then create a simple static method to use Google's geo-coding service to populate that model based on a street address that 
we already have for the location.

<script src="https://gist.github.com/stesta/d92787de6d02e0f80b06.js"></script>

What I actually ended up doing was using these two bits of code to update their database location records to include 
the returned latitude and longitude. I then updated the location c-sharp and corresponding javascript models to include 
these values when the data is returned. Having the latitude and longitude available on the frontend model made it easy to 
use the Google Maps Javascript API to create a map.

What I ended up doing was creating a Knockout binding handler to create the map.

<script src="https://gist.github.com/stesta/620d064782d35c17e773.js"></script>

Below is a simple example of how to actually use this binding handler... <br />
**(note you need to specify a height and width for your map)**

<script src="https://gist.github.com/stesta/e9f4feb2a3dc113cac99.js"></script> 

Easy enough! 15 minutes of work!

### Working Code  

Additionally, here are a couple of working fiddles to demonstrate:

[Single Point, Multiple Maps](http://jsfiddle.net/stesta/2T3Db/)  

[Multiple Points, Single Map](http://jsfiddle.net/stesta/p3ZT4/)   