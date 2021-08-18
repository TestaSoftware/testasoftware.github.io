---
title: "Git Branching Workflow - Part 1: Overview"
slug: 2013-01-25-git-branching-workflow-part-1-overview
image: /assets/images/blog/thumbnails/tree-branch.jpg
date: 2013-01-25
---
In this post I'm going to explain the current development model for my team. We use [Git][1] very heavily. I will go over our bra<!--more-->nching 
workflow with some explanation of the basics, but if you need to learn some more about Git try the book [Git Pro][2]. It is available as 
a free ebook and covers everything you'll need to know.

![][branching-strategy] 

From Feature to Production
-------------------------- 

### The Main Branches
There are three main branches that we use in our central repository. We'll call that repo 'origin'. Our three main branches are 
development, staging and production.  

**The development branch** is used as one point to continually share code across the team. As a general rule code pushed out development 
branch should be code that will actually build and passes our unit tests. If we need to share more experimental code we will pull from 
each other. The development branch commits are then occasionally merged into the staging branch when we feel the code is a candidate for 
release.  

**The staging branch** is monitored for changes by our build server. Our build server performs multiple functions including running 
our test suite and deploying to the staging environment. Once our tests are green and code has been deployed to the staging 
environment we are able to perform our user acceptance testing. In addition to commits from the development development branch, 
bugfixes can also be merged directly to the staging branch. When a staging release is ready changes on the staging branch are then 
merged into production.  

**The production branch** (master) is the branch that reflects what is currently deployed to production. The production branch is 
also monitored for changes by our build server. Assuming our test suite continues to pass, the latest changes are deployed. In the 
event that there is a severe bug that need to be fixed immediately (a hotfix), a temporary hotfix branch can be created off the 
production branch. Changes in the hotfix branch can then be merged directly into production and then also merged directly into the 
development branch so changes are shared and propagated back through the workflow.  

Note that while these branches comprise a majority of our development processes Git, however, is still a distributed version 
control system (DVCS). Having a central repository that we use for development and deployment in no way prevents us from pull 
changes directly from team members and other places.  

### Posts in This Series
Part 1: Overview

[Part 2: Feature Branches](/steve/blog/git-branching-workflow-part-2-feature-branches)  

[1]: http://www.git-scm.com/
[2]: http://www.git-scm.com/book

[branching-strategy]: http://testasoftware.com/assets/images/blog/git-workflow/branching-strategy.png