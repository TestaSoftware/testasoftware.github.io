---
layout: post
title: Unit Testing with Telligent Evolution
image: /assets/images/blog/thumbnails/keys.jpg
date: 2014-01-15
---
Kaboom! *The service locator has not been initialized*  <!--more--> 

<img width="456" height="58" src="{{ "/assets/images/blog/Telligent/service-locator-error.png" | prepend: site.url }}" />  

If you use the Telligent Evolution platform and you've tried to set up unit testing then you've probably seen this message. 
So what's the problem? Well the service locator really isn't anything more than a Ninject kernel. Since our unit tests are 
not operating within the bounds of the Telligent application we need to build and initialize that kernel ourselves. Here are 
the basic steps to set up a Visual Studio Unit Test project to test services that use the Telligent inline PublicApi. Note 
that depending on your tests you may need to tweak things a little bit, but this should get you started.  

### Step 1: Reference the Telligent Evolution DLLs
The first step is going to be to reference the DLLs from your Telligent Evolution installation in your unit test project. 
This is a fairly easy step. Just right click your references folder and Add Reference. The simply browse to and 
select the libs you need in your installation's bin directory.  

One item of note, however, is that you will need to make sure that the *System.Web.Routing* DLL has its 
*Copy Local* property set to *true*.  

### Step 2: Copy Config and Module Files
In this step there are a few files that need to be moved over into the unit test project. First we need to move some 
config files. The import ones include: *caching.config*, *communityserver.config* and 
*communityserver_override.config*. As stated before you may have to move more config files depending on what you 
are testing and how you want to set things up. For example, the set up mentioned in this post doesn't explicitly include 
plugins or scheduled jobs. Additionally, *connectionstring.config *is not included because I choose to migrate those 
settings to App.config as explained below. These config files can just be placed into the root of the unit test project.

The other files that have to be moved are all the config files under the *Modules* directory. The modules directory 
contains the xml configurations that contain the Ninject bindings when we set up our kernel. I usually just put these in a 
Modules folder in the unit test project. These can be placed anywhere in the project. In order to place them in a different 
location, however, you'll need to change the path in Step 4.

### Step 3: Web.config to App.config

We are setting up a unit testing project not a web application. So it stands to reason that we will need to migrate some 
of the settings that are in the Telligent Web.config over to our test project's App.config. You're not going to want 
to move everything over. Some of the pertinent items include: (Note these are just examples. Your actual config may vary)

**a reference to the caching config**

<script src="https://gist.github.com/stesta/997b4eda49c5718a7992.js"></script>

**system.web settings for membership and profile**

<script src="https://gist.github.com/stesta/c0d54d082183916abdb9.js"></script>

**Note:** Additionally, I generally also like to copy connectionstrings.config settings directly into the App.config of my 
unit test project. You will probably want to point to a test database anyway.

### Step 4: Initialize the Kernel

This is the magic of initializing the service locator. Now that we have all the references to DLLs, config files and 
settings migrated we can go ahead and build out our Ninject kernel. I It's going to be a slightly different process for 
Telligent Evolution 6.x than it is for 7.x, but I'll show you both. In either case I like to set up a base class for my 
unit tests that perform the initialization. This way I just don't have to copy and paste initialization code all over 
the place.

**Using(s) Needed**

<script src="https://gist.github.com/stesta/28b08353e3718a1e50b5.js"></script> 

**Telligent Evolution 6.x**

<script src="https://gist.github.com/stesta/42cca6da12520fd368d1.js"></script>

**Telligent Evolution 7.x**

<script src="https://gist.github.com/stesta/82589e00299d51701f2b.js"></script>

### Step 5: Write Your Tests!

Now we can go ahead and write our unit tests! As you can see from the example below we're inheriting from our 
*UnitTestBase* class. We can use the Telligent.Common.Services.Get<T>() function to reference Telligent's 
instance of the Ninject kernel that we built and initialized. Additionally, in our unit tests, if we use that function 
to get any of our services we have writing it will resolve our constructor injections without the service locator 
error anymore!

<script src="https://gist.github.com/stesta/20c6b87a86df366f2d2e.js"></script>

An example of the *TestService* that uses the Telligent PublicApi.

<script src="https://gist.github.com/stesta/afa738833a63b214fdc6.js"></script>

And that's it! Those are the basics of how to set up unit testing with the Telligent PublicApi. Just please bear in mind 
that there is more to consider beyond the simple examples provided. For instance, you can also make sure that your 
custom plugins are loaded or perhaps rebind the email functionality to prevent emails from being sent during testing. 
Just make sure to tailor things to your environment.