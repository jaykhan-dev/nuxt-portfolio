---
title: Designing a VueJS 3 App

description: Lets learn how to code a large application. The basic steps required to ensure you create a maintainable application.

previewImage: generic/code.jpg

categories:
- VueJS

published: false
---

# VueJS

Building an app should take the same process you would take for building a home. You don't break ground until you have a design in place. Material in stock and contractors selected.

It is too easy to start coding so people take the easier route. However, the last thing you should do first is start coding. It isn't worth the effort because all of that work will be for naught if you make a poor choice. Now you have to start from the beginning or remove entire sections because they aren't compatible with the final product.

Lets take a simple example, a blog (so everyone can follow along).

## Consider all factors

Not all blogs are the same, lets consider all the factors in our case (in this case, these are random).
1. Only the user can create a blog
2. The visitor can search by title, content and/or category.
3. Blogs have images and are of a technical nature

Lets make the assumption there is a login functionality and blogs are written in the app (to make is a little more complex).

### Router

I believe the first thing to create is a router. This will give you a high level snapshot of the application. What are the routes which you can consider when creating components and views.

This is what a basic router will look like:
```javascript
import { createWebHistory, createRouter } from 'vue-router'
// these are views (not 'components')
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Contact from '@/views/Contact.vue'
import Blog from '@/views/Blog.vue'
import Dashboard from '@/views/Blog.vue'

// router is an array of routes
const routes = [
  {
    path: "/", // this routes URL path, this will also be where we will showcase all the blogs
    name: "Home", // Optional, can be used to route to
    component: Home // The component/file that will be rendered
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/blog/:id", // the individual blog in a dynamic route
    name: "Blog",
    component: Blog
  },
]

const router = createRouter({
  history: createWebHistory(), // use history mode instead of hash, note how it is done differently then Vue2
  routes,
})

```

Thats about all the routes the visitor is should see. However as a create and contributor to the site, we need to create/update/read/delete (CURD) new blogs.

That begs the question under which route should those events take place?

Creating and editing are about the same funtionality in my opinion, the only difference being that in the former you have no content to edit but would use the same form as while editing. Reading and Deleting and requests to the server so we don't really need to worry about those. So think about the workflow, you visit a blog to 'read' it and you vist a blog to 'edit' it. Should that use the same component? I think we can use the same route to do all three.

So perhaps it could look something like this:

```javascript
  {
    path: "/blog/:id/create", // Creating a new blog
    name: "Blog",
    component: Blog
  },
  {
    path: "/blog/:id/edit", // Editin a old blog
    name: "Blog",
    component: Blog
  },
```

You will notice, we are using the same component. Only our endpoint is different, which will trigger different components to render.

/// Correct this
How exactly do we do this? We can use `route.params`.

But as a creator, you'll need an admin location where you can trigger the status of blogs on or off:

```javascript
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard
  }
```

