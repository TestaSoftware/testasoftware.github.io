---
title: Unit Testing with Telligent Evolution
slug: 2014-01-15-unit-testing-with-telligent-evolution
image: /assets/images/blog/thumbnails/keys.jpg
date: 2014-01-15
---
Kaboom! *The service locator has not been initialized*  <!--more--> 

![](/assets/images/blog/Telligent/service-locator-error.png)

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

```xml
<telligent.caching configSource="caching.config" />
```

**system.web settings for membership and profile**

```xml
<system.web>
  <membership userIsOnlineTimeWindow="15" defaultProvider="Telligent.EvolutionSqlProvider">
    <providers>
      <clear />
      <add name="Telligent.EvolutionSqlProvider" type="Telligent.Evolution.AspNetMemberRole.CSMembershipProvider, Telligent.Evolution.AspNetMemberRole" connectionStringName="SiteSqlServer" enablePasswordRetrieval="false" enablePasswordReset="true" requiresQuestionAndAnswer="false" requiresUniqueEmail="true" passwordFormat="Hashed" applicationName="dev" description="Stores and retrieves membership data from the local Microsoft SQL Server database" maxInvalidPasswordAttempts="5" passwordAttemptWindow="5" minRequiredPasswordLength="6" minRequiredNonalphanumericCharacters="0" />
    </providers>
  </membership>
  <profile defaultProvider="Telligent.EvolutionSqlProvider" enabled="true">
    <providers>
      <clear />
      <add name="Telligent.EvolutionSqlProvider" type="Telligent.Evolution.AspNetMemberRole.CSProfileProvider, Telligent.Evolution.AspNetMemberRole" connectionStringName="SiteSqlServer" applicationName="dev" description="Stores and retrieves profile data from the local Microsoft SQL Server database" />
    </providers>
    <properties>
      <add name="commonName" type="string" />
      <add name="birthdate" type="DateTime" />
      <add name="gender" type="int" defaultValue="0" />
      <add name="dateFormat" type="string" />
      <add name="publicEmail" type="string" />
      <add name="language" type="string" />
      <add name="webAddress" type="string" />
      <add name="webLog" type="string" />
      <add name="webGallery" type="string" />
      <add name="signature" type="string" />
      <add name="signatureFormatted" type="string" />
      <add name="location" type="string" />
      <add name="occupation" type="string" />
      <add name="interests" type="string" />
      <add name="msnIM" type="string" />
      <add name="yahooIM" type="string" />
      <add name="aolIM" type="string" />
      <add name="icqIM" type="string" />
      <add name="enablePostPreviewPopup" type="System.Boolean" defaultValue="false" />
      <add name="enableEmoticons" type="System.Boolean" defaultValue="true" />
      <add name="timezone" type="System.Double" defaultValue="0" />
      <add name="timeZoneInfo" type="string" />
      <add name="fontsize" type="int" defaultValue="0" />
      <add name="bio" type="string" />
    </properties>
  </profile>
</system.web>
```

**Note:** Additionally, I generally also like to copy connectionstrings.config settings directly into the App.config of my 
unit test project. You will probably want to point to a test database anyway.

### Step 4: Initialize the Kernel

This is the magic of initializing the service locator. Now that we have all the references to DLLs, config files and 
settings migrated we can go ahead and build out our Ninject kernel. I It's going to be a slightly different process for 
Telligent Evolution 6.x than it is for 7.x, but I'll show you both. In either case I like to set up a base class for my 
unit tests that perform the initialization. This way I just don't have to copy and paste initialization code all over 
the place.

**Using(s) Needed**

```csharp
using Ninject;
using Ninject.Modules;
using Telligent.Evolution.Api.Bridge.Providers;
using Telligent.Evolution.Components;
using Telligent.Evolution.Wikis.Components;
```

**Telligent Evolution 6.x**

```csharp
[TestClass]
public class UnitTestBase
{
    [TestInitialize]
    public void Initialize()
    {
        if (!Telligent.Common.Services.IsInitialized)
        {
            // Set up a Ninject kernel with Telligents Legacy modules
            var kernel = new StandardKernel();

            // Load Telligent Modules
            kernel.Load(new INinjectModule[] { new Telligent.Evolution.Web.Modules.LegacyProvidersModule() });
            kernel.Load("../../Modules/*.config");

            if (!Telligent.Common.Services.IsInitialized)
                Telligent.Common.Services.Initialize(kernel);
        }
    }
}
```

**Telligent Evolution 7.x**

```csharp
[TestClass]
public class UnitTestBase
{
    [TestInitialize]
    public void Initialize()
    {
        if (!Telligent.Common.Services.IsInitialized)
        {
            // Set up a Ninject kernel with Telligents Legacy modules
            EvolutionKernel kernel = new EvolutionKernel();

            // Note there are no legacy modules to load here<br />            // Load Telligent Modules
            kernel.Load("../../Modules/*.config");

            if (!Telligent.Common.Services.IsInitialized)
                Telligent.Common.Services.Initialize(kernel);
        }
    }
}
```

### Step 5: Write Your Tests!

Now we can go ahead and write our unit tests! As you can see from the example below we're inheriting from our 
*UnitTestBase* class. We can use the Telligent.Common.Services.Get<T>() function to reference Telligent's 
instance of the Ninject kernel that we built and initialized. Additionally, in our unit tests, if we use that function 
to get any of our services we have writing it will resolve our constructor injections without the service locator 
error anymore!

```csharp
using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Tests
{
    [TestClass]
    public class UnitTestSample : UnitTestBase
    {
        [TestMethod]
        public void should_retrieve_a_user_from_PublicApi()
        {
            var svc = Telligent.Common.Services.Get<TestService>();
            var u = svc.GetUser();
            Assert.IsNotNull(u);

        }
    }
}
```

An example of the *TestService* that uses the Telligent PublicApi.

```csharp
using System;
using Telligent.Evolution.Extensibility.Api.Version1;

namespace Tests
{
    public class TestService
    {
        private Telligent.Evolution.Components.IUserService _userService = null;

        public TestService(Telligent.Evolution.Components.IUserService userService)
        {
            _userService = userService;
        }

        public Telligent.Evolution.Extensibility.Api.Entities.Version1.User GetUser(string username)
        {
            var u = PublicApi.Users.Get(new UsersGetOptions() { Username = username });
            return u;
        }
    }
}
```

And that's it! Those are the basics of how to set up unit testing with the Telligent PublicApi. Just please bear in mind 
that there is more to consider beyond the simple examples provided. For instance, you can also make sure that your 
custom plugins are loaded or perhaps rebind the email functionality to prevent emails from being sent during testing. 
Just make sure to tailor things to your environment.