---
layout: default
title: XSAVI800
published: true
---


**XSAVI 800**

I developed a few maps for the Advanced Web Mapping class I took at Pratt.

[_Neighboring Neighborhood Map of Brooklyn_](http://chrisroberts.nyc/xsavi800/ass4.html)

When you click on an official neighborhood of Brooklyn, the area of the neighborhood is calculated, and adjacent neighborhoods are highlighted. The map has a customized Mapbox basemap and used five GIS operations through TurfJS to find the other neighborhoods.

[_Viewing ESRI data in a Leaflet map_](http://chrisroberts.nyc/xsavi800/final/newmap.html)

At work I deal with Esri's software and proprietary data formats. I like Leaflet's javascript API a lot more than ESRI's, so I researched ways to work with ESRI data through open source APIs. The result is this map, which displays spatial data from an ArcServer feature service; when a point is clicked, the record is queried in a related table for more data.

_Note: A version of this map, displaying open space projects in Hudson County, is currently being reviewed for publication. I've since un-published the data used in my proof-of-concept online map; after the County open space map is approved, I'll provide the link here._
