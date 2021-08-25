---
title: Generating C# Classes from an XML File
slug: 2013-10-08-generating-csharp-classes-from-an-xml-file
image: /assets/images/blog/thumbnails/code2.jpg
date: 2013-10-08
---
Update: Visual Studio has this functionality baked in! `Edit -> Paste Special`

<strike>
I frequently come to the conclusion that I'm working too hard. This is usually because I try to reinvent the wheel when some<!--more-->one 
out there has already done the job better than I could have. Recently, I had a need to create some strongly typed C# models to help with 
de-serializing some XML. For simple XML it's easy enough to create these models/classes by hand. For more complex XML it's often easier to 
use the XML Schema Definition tool.

The XML Schema Definition tool is packaged into the Windows SDK. This means I've had this tool on my machine for practically forever and 
have been doing things the hard way for a long time.

Your path to xsd.exe will look something like this depending on which version of the Windows SDK you have installed.

    C:\Program Files (x86)\Microsoft SDKs\Windows\&lt;version&gt;\Bin\NETFX 4.0 Tools\xsd.exe

It's a two step process to convert an XML file to a corresponding set of C# classes: create an XSD from your XML and then create your 
C# classes from that XSD...

### XML to XSD

The following will output &lt;filename&gt;.xsd

    xsd.exe &lt;filename&gt;.xml

### XSD to C# Classes

The following will output your csharp classes to a single file &lt;filename&gt;.cs - Note the '/l:cs' switch can be changed to '/l:vb' 
to output VB instead of C#

    xsd.exe /c /l:cs file.xsd

And that's it! You should now have an auto-generated C# model. By default this file will be placed into the same directory as the xsd 
executable. You can also specify the **'-out:&lt;directoryName&gt;'**in order to change the location that your files 
get saved.
</strike>
