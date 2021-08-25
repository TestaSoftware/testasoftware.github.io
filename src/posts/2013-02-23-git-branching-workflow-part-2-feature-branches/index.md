---
title: "Git Branching Workflow - Part 2: Feature Branches"
slug: 2013-02-23-git-branching-workflow-part-2-feature-branches
image: /assets/images/blog/thumbnails/tree-branch2.jpg
date: 2013-02-23
categories: ["devops", "git"]
---
Disclaimer: The following section of our workflow includes rebasing. Rebasing can be a dangerous operation of you don't know what you're doing. Commits can be lost and you can make life hell for a developer who is working off of a commit you've borked. So follow the golden rule... **Do not rebase commits that you have pushed to a public repository**. Thanks!<!--more-->

Working With a Feature Branch
-----------------------------

### Create a Feature Branch

Every journey has to start some where. Our journey starts with a feature branch. A feature branch affords us the 
ability to develop a new feature without polluting main development branch.

```bash
git checkout -b feature_name dev
```

At this point we've created and checkout a new branch based off of our development branch. Now we can continue to work 
on this branch without affecting our mainline dev branch.

### Rebasing a Feature Branch With the Latest Code

As we work on our new feature, there will undoubtedly be code that is pushed up to origin/development by other developers. 
Pulling that code into our feature branches gets us a couple of things. First, having the latest development branch code 
while were working on a feature makes merging easier. Second, if we rebase the latest code into our feature branch we 
avoid some extraneous merge commits that add additional clutter to the history.

```bash
// get the latest changes
git checkout development
git pull -u origin development

// rebase the latest changes into our feature branch
git checkout feature_branch
git rebase development
```

### Merging a Feature Branch (using interactive rebase)

Additionally, there are feature branch benefits when it comes time to push out our changes. The old adage 
'commit early, commit often' holds true during development. Many commits give developers the flexibility and 
security they need. When it comes to the main branches, though, all of those developmental commit just tend to 
clutter up the history. What we really want in the main branches is a single commit that represents the feature 
we've built. This is where interactive rebasing comes in.

Here's what we're going to achieve. We're going to rewrite our feature history to include the latest changes from 
the development branch and at the same time we're going to 'squash' all of our commits in our feature branch into 
a single commit. Here's how we do this.

```bash
// get the latest changes, same as before
git checkout development
git pull -u origin master

// perform the interactive rebase, notice the extra '-i'
git checkout feature_branch
git rebase -i development
```

This will present us with a editor that will allow us to 'pick' and 'squash' commits. For our team generally we 
will 'pick' the first commit and 'squash' all of the other commits into that first commit. All that's needed is 
to rename 'pick' to 'squash' at the beginning of all the commits you're squashing. See the screen shot below.

![](/assets/images/blog/git-workflow/git-rebase.png)

After you save git will then perform the rebase and squashing! All that's needed is to merge your feature branch 
into the local/development branch and push it up to origin/development to share with the rest of the team!

### Posts in This Series
[Part 1: Overview](/blog/2013-01-25-git-branching-workflow-part-1-overview)

Part 2: Feature Branches