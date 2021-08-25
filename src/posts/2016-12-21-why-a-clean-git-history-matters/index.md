---
title: Why a Clean Git History Matters
slug: 2016-12-21-why-a-clean-git-history-matters
image: /assets/images/blog/thumbnails/git.jpg
date: 2016-12-21
categories: ["devops", "git"]
---

Ugly git histories annoy the hell out of me!!!<br />  
... and they should annoy the hell out of you too!  

<!--more-->

I can't stand looking at the `git log` (the history) for a project that contains frivolous merge commits causing complex branching paths which are impossible to follow. I completely understand that the history of the code base has no bearing on how the current iteration of the code functions, but there are still reasons a clean history matters.  

So why do I care?
-----------------

 1. **Having a Clue:**  
 For starters, a clean, properly rebased git history is a demonstration that you have some semblance of an idea of what you are doing. The corollary being that you have no clue what you are doing. Git is an amazing tool for source control. It provides many opportunities for efficient source control management and workflow. By the same token it also provides many opportunities to screw things up. Having a clean and readable Git history is an indicator that the folks working with the code base are familiar with the tooling and haven't done anything detrimental to the project. It's an indicator that everyone on the team is familiar with the workflows and processes that have been put in place.  

 2. **Change Logs:**   
 Another reason the history matters are for change logs. The Git history can be leveraged to create accurate and detailed logs of any and all changes that are made. The logs are an often overlooked and valuable artifact to many different people. 
   - it gives have insight into the code we've written
   - provide better work estimates in the future
   - justify what gets billed to a client
   - gives the end user insight into new features that hopefully make their lives easier  

  3. **Roll-Back Plan:**  
  A clean history also allows for a better roll-back plan. Git provides some remarkable abilities to roll back and recover old iterations of the code. A clean history helps us, the developer, to leverage those features of Git during those times when critical failures need to be addressed.  

  4. **Code Recovery:**  
  History allows provides a window into older code that we may have written and since cut out of the code base. Too often we fall into the trap of keeping unecessary code around. Never be afraid to scrap code! Move on. Git provides affords us a safety net. If there's ever a bit of code that needs to be brought back from the dead, it's possible.  

Visualizing Git History from the Command Line
---------------------------------------------

There are plenty of graphical tools out there that help visualize Git history, but did you know you can do that from the command line? Personally, I enjoy the command line. Git commands can be cumbersome at times, but it really helps me to be clear and certain about every action I am performing against the code base. That being the case it's nice not to have to leave the command line when I need to review the Git logs. The following Git command will display a nice command line graph for us.  

```bash
git log --graph --oneline --abbrev --color --decorate 
```

One additional little tip is that I like to set up that command as an alias to `gg` in the ~/.bashrc file. This let's us just type `gg` (for git graph) into the command line instead of having to type out that long statement every single time. 
 
```bash
alias gg=git log --graph --oneline --abbrev --color --decorate 
```

The `gg` command yields the following result

<img width="100%" src="/assets/images/blog/git-history/clean-history.png" />  

So What Does a Clean Git History Actually Look Like?  
-----------------------------------------------------

Full disclosure: There is no consensus here.  

A clean history can mean different things depending on the workflow being used on a given project. Generally, a clean git history means that the branching paths are clear and understandable. I prefer a git history that results in pull requests ending up as merge commits and any other feature commits cleanly rebased onto a single feature branch. This results in a git history similar to the one shown in the image above. In that image it is very clear which commits are a part of the pull requests. I tend to stick to the following rules: 

 1. Do your work on a local copy of your feature branch.  
    This allows you, as a developer, to interactively rebase commits. It's the opportunity to squash dev commits and reword commits to be more descriptive. 
 2. Prefer rebasing as opposed to merge committing.  
    This helps keep a singular and clear branching path for individual features. 
 3. Be descriptive with your commit messages.  
    Descriptive commit messages let us leverage Git for change logs and code recovery. If you are descriptive in your commit messages you can easily pipe out your log commands (including `gg`) to `grep` to find anything you need.
 4. Tag commits properly.  
    Many Git workflows involve tagging. Make sure you follow your team's standards. In my day-to-day we use Jira to track our work items. Jira's integration with Git provides the ability to use tags in our commit messages to automate workflow and tie Git commits to our work items.