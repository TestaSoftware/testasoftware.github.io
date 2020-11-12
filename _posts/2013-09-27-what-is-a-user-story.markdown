---
layout: post
title: What is a User Story?
image: /assets/images/blog/thumbnails/flow-charting.jpg
date: 2013-09-27
---
User stories are becoming more prevalent these days. While a user story by itself can be use autonomously, they're also used<!--more--> 
heavily in agile methodologies like scrum. The definition of a user story is simple:

> A User Story describes a piece of functionality that **valuable** to a **user** of the system.

While the definition is simple there is more to it than that. A user story has more parts to than just a card on a scrum board. 
There is more to their purpose and value. User stories can help us as developers plan our sprints better, prioritize our work 
better, consistently deliver valuable new features and stay focused on what really matters to the business. As a pleasant side 
effect to all of that we become more productive and valued individuals.

It may sound dumb to state, but a user story is always written from the perspective of an end user of the system. That's why it's 
called a user story.

### Parts of User Story

#### The Card

The card is a written description of the user for *planning* and as a *reminder.*This is the part of a user story that most of us know. 
It's that little card on the wall or white board that has some words written on it that we try to move forward day to day. The card is 
only a small part of a user story. The card is only intended to serve as an overview, a placeholder for planning and a reminder that we 
have active tasks to complete.

The story on the card can be written in many formats. One such format is a user role format. It's not the only format, but it is my 
preferred method.
    
    As a "type of user of the system"
    I want "to be able to perform this action"
    Because "of this need or business rule"

#### Conversations

Conversations are just artifacts that are used to flesh out the details of a story. These artifacts are generally the product of 
conversations we have had with people (generally stakeholders). These artifacts aren't kept on a scrum board, but they are just as much 
a part of the user story as anything else. Types of conversation artifacts can include: use cases, architecture diagrams and 
even prototypes.

#### Confirmation

This piece is a set of tests that convey and document details and can be used to determine the story is complete. These tests should 
be as automated as possible. Note that confirmations, while automated, are not really unit tests. Unit tests test a that a specific 
piece of code is working. Confirmations are tests that verify the story is correct. This may seem like a semantic difference. It's 
even more blurry when you know that confirmations can take the form of BDD tests like SpecFlow/Gherkin or integration tests via something 
like Selenium. The important thing to remember here is that we are writing tests to confirm that our user story is successful.

### Guidelines for Good User Stories

1. It is important to remember that user stories should be as independent as possible. A good user story is not dependent on any other 
   user story in order to be completed. In the real world this isn't always possible (that's why it's a guideline). However, we should 
   try and limit those dependencies as much as possible.
2. A User Story is something the user can complete in one sitting. What I'm saying here is that a user story should be something a 
   user can complete all at once. Example, a user story that requires a user to wait for an email to arrive should probably be split up.
3. User Stories must be "estimate-able". Since a user story is user for planning, we need to be able to put an estimate to it. Some 
   suggestions for how to estimate are based on things like perceived effort or ideal days. Be aware of the factors that can make 
   estimates difficult such as: lack of domain knowledge, lack of technical knowledge (ie. a new api we haven't worked with) or the 
   story is just too big.
4. Stories should identify each user's reason for interacting with the system. There needs to be some sort of justification as to why 
   a feature is needed. If we know why a feature is needed we can prioritize and plan better. If we have trouble coming up with a 
   reason, that may be a good indicator that could be a feature we don't need and can cut.
5. Stories should exercise each layer of the application's architecture. What we don't want is to end up at sprint 4 and realize 
   that our architecture we began during sprint 1 isn't going to work out. The user story should encompass an end-to-end feature. 
   It should focus on one small piece of a specific part of our architecture.
6. Stories should be "closed", the user should feel they have accomplished something. Rather than "closed" maybe a better word is 
   "complete". User stories generally shouldn't encompass fragments of behavior. When we run through our confirmations and user acceptance 
   testing we should be able to see the full value of the described feature.
