---
title: Knockout Binding Handler for Google Maps
slug: 2014-01-04-knockout-binding-handler-for-google-maps
image: /assets/images/blog/thumbnails/boxing.jpg
date: 2014-01-04
---
Knockout Binding Handlers, FTW!

Very recently a client request came in for some new 'maps' features to their existing site. <!--more-->Their site is a C#/.NET 
4.0 backend with a knockout.js frontend. They have a series of pages that represent their locations. To accompany the location 
information they wanted to display an interactive map. Google maps makes this easy enough, but with knockout it was even easier!

First the data. To position a map we're going to need latitude and longitude. Google makes this process super easy with their 
geo-coding services. We start with a model to represent our location...

```csharp
[Serializable]
public class GeocoderLocation
{
  public double Longitude { get; set; }
  public double Latitude { get; set; }
  public override string ToString()
  {
    return String.Format("{0}, {1}", Latitude, Longitude);
    
  }
}
```

Then create a simple static method to use Google's geo-coding service to populate that model based on a street address that 
we already have for the location.

```csharp
public static class Geocoder
{
  public static GeocoderLocation GetLatitudeLongitude(string address)
  {
    WebRequest request = WebRequest.Create("http://maps.googleapis.com/maps/api/geocode/xml?sensor=false&amp;address=" + HttpUtility.UrlEncode(address));
    
    using (WebResponse response = request.GetResponse())
    using (Stream stream = response.GetResponseStream())
    {
      XDocument document = XDocument.Load(new StreamReader(stream));
      XElement longitudeElement = document.Descendants("lng").FirstOrDefault();
      XElement latitudeElement = document.Descendants("lat").FirstOrDefault();
      if (longitudeElement != null &amp;&amp; latitudeElement != null)
        return new GeocoderLocation()
        {
          Longitude = Double.Parse(longitudeElement.Value, CultureInfo.InvariantCulture),
          Latitude = Double.Parse(latitudeElement.Value, CultureInfo.InvariantCulture)
        };
        
      return null;
    }
  }
}
```

What I actually ended up doing was using these two bits of code to update their database location records to include 
the returned latitude and longitude. I then updated the location c-sharp and corresponding javascript models to include 
these values when the data is returned. Having the latitude and longitude available on the frontend model made it easy to 
use the Google Maps Javascript API to create a map.

What I ended up doing was creating a Knockout binding handler to create the map.

```javascript
ko.bindingHandlers.googlemap = {
  init: function (element, valueAccessor) {
    var
      value = valueAccessor(),
      latLng = new google.maps.LatLng(value.latitude(), value.longitude()),
      mapOptions = {
        zoom: 16,
        center: latLng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      },
      map = new google.maps.Map(element, mapOptions),
      marker = new google.maps.Marker({
        position: latLng,
        map: map
      });
  }
};
```

Below is a simple example of how to actually use this binding handler... <br />
**(note you need to specify a height and width for your map)**

```css
<style>
.map { height:300px; width:300px; }
</style>

<div data-bind="foreach: locations">
  <div data-bind="text: name"></div>    
  <div class="map" data-bind="googlemap: { latitude: latitude, longitude: longitude }"></div>
</div>
```

Easy enough! 15 minutes of work!

### Working Code  

Additionally, here are a couple of working fiddles to demonstrate:

[Single Point, Multiple Maps](http://jsfiddle.net/stesta/2T3Db/)  

[Multiple Points, Single Map](http://jsfiddle.net/stesta/p3ZT4/)   