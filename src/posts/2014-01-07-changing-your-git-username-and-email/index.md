---
title: Changing Your Git Username and Email
slug: 2014-01-07-changing-your-git-username-and-email
image: /assets/images/blog/thumbnails/mail.jpg
date: 2014-01-07
---
When Git is installed the first thing you probably want to do is set up your username and email. That is unless of course <!--more-->
*git blame* always seems to out you for breaking the build!  

My preferred route is to simple use the *git config* command. Basically, all the command is really doing is editing the 
.gitconfig file off of your root directory. You can edit that file directly, but I tend to find the command a little easier.  

**View your .gitconfig file** 

Here are a couple methods to view what you currently have set up in your .gitconfig.

First, here's how we show our info via the config command

    git config user.name

**Change your username** 

Here is the command to change your username.

    git config --global user.name "Your Name"

**Change your email** 

Here is the command to change your email.

    git config --global user.email youremail@foo.com

**How .gitconfig ends up looking**

So this is the final product. If you <em>cat</em> your ~/.gitconfig file you'll get something like this. Also, if you want to 
skip the commands you can manually edit and save the file to look like the output below.

    [user]
    name = Your Name  
    email = youremail@foo.com  