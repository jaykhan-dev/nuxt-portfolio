---
title: Designing a VueJS application
description: What should the code and file structure of a VueJS application look like?
previewImage: generic/puppetlogo.png

published: true

categories:
- VueJS
- Javascript
---

# Designing an application's code structure

Once the code base reaches critial mass, the application's design is what will determine how easy or hard it is to manipulate.

The generic items all applications need are as follows:

1. A router - Moving between views
2. Data handling between views
3. Communication between different components

We will explore all of these in a VueJS environment.

## Router

We won't go over too much technical information here, because I feel the official docs are significantly better for learning that aspect. But they don't really show you *how* you should build/design a router.

Imaine a very simple site:

1. Homepage
2. Contact Us
3. About Us

That is just three routes. The code for this would be fairly simple

## Data handling between routes

There are three tools that are used to communicate between components.

1. Props
2. EventBus
3. Vuex

It is best to look a component on a case by case basis to determine which one of these tools the component should use to receive and manipulate data.

But before we dig into which of the above tools to use where, we should probably think about the information we are working with.

Upon initial load, your probably going to be at a landing page that allows you to navigate between different views. This is the main hub and should simply give the user the choice to continue deeper into the appication. There should be no consequencial information at this level.

Therefore, no API calls should be made at this point. There is no point, the user has not yet made the decision where they want to go yet. And fetching all the data would be redundant because they may not want that information to begin with.

### User Experience

So you have a landing page, and it gives you some information about your account (ie, settings like profile picture, name etc.). Once that is done, the user wants to pull in their account information.

Perhaps how their account is doing? So they navigate to that particular page, where the API for account information is called and that information is loaded to the system. That will allow for a better user experience because the application will load faster. Speed is definietly one of the main
focuses a developer should have. The UX is extremely important for getting and keeping clients.

