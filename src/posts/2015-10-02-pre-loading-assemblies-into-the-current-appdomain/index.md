---
title: Pre-Loading Assemblies Into the Current AppDomain
slug: 2015-10-02-pre-loading-assemblies-into-the-current-appdomain
image: /assets/images/blog/thumbnails/one-way.jpg
date: 2015-10-02
categories: ["development", "dotnet"]
---

I'm a big proponent of Inversion of Control and Dependency Injection. One of niceties that most DI containers provide is the<!--more--> ability to register bindings for multiple implementations for a single interface. In order to accomplish this the basic idea is that the container/framework will scan the currently loaded assemblies. If that's not the case the other option is usually to provide an enumerable of the types we want to register. In which case, it's our job to scan the assemblies for the types we care about. 

It's easy enough to make use of the current AppDomain to get a list of assemblies that are available. The problem is that the AppDomain loads assemblies on-demand when they are needed. This can present a problem for an IoC container that may need to register multiple implementations contained across different assemblies. Often an IoC container will be one of the first things instantiated in an application meaning not all of the types we need registered are in assemblies that have been loaded. This is particularly true when registering types by convention. 

One solution is to pre-load assemblies into the current domain. The code below will load all the assemblies located in your web project's bin/ folder into the current AppDomain. It has the added advantages that it will not load any assemblies that already loaded and it will not lock the bin/ directory itself.   

```csharp
void PreLoadAssemblies()
{
    string path = System.IO.Path.GetDirectoryName(Assembly.GetExecutingAssembly().GetName().CodeBase).Replace("file:\\", "");
    FileInfo[] files = files = new DirectoryInfo(path).GetFiles("*.dll", SearchOption.AllDirectories);
    
    foreach (var fi in files)
    {
        var assemblyName = AssemblyName.GetAssemblyName(fi.FullName);
        var assemblies = AppDomain.CurrentDomain.GetAssemblies();

        if (!assemblies.Any(assembly => AssemblyName.ReferenceMatchesDefinition(assemblyName, assembly.GetName())))
        {
            Assembly.Load(assemblyName);
        }
    }
}
```

After the assemblies have been loaded it is easy enough for our IoC container to register multiple bindings located across any assembly. The example below demonstrates how we'd register these binding using a framework like [Simple Injector](https://simpleinjector.org).  

```csharp
var container = new Container();

PreLoadAssemblies();

var assemblies = AppDomain.CurrentDomain.GetAssemblies();
var types = assemblies
              .SelectMany(a => a.GetTypes()
                                .Where(t => typeof(IInterface<T>)
                                .IsAssignableFrom(t) 
                             && t.Name != "Object"));

container.RegisterAll(typeof(IInterface<T>, types);
```
