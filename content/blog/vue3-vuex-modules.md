---
title: Vuex Modules in Vue 3
description: How to separate your modules in Vue 3
previewImage: generic/vue-logo.jpg
published: true
categories:
  - VueJS
---

# Vue 3 Vuex Modules

## Syntax Changes

Going from Vue2 to Vue3, there are some syntactical changes:

In Vue2

```javascript
// main.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  // ...
})
```

In Vue3

```javascript
// Your ./store/index.js
import { createStore } from 'vuex'

const store = createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
})

export default store

// And in your ./index.js file
import store from './store/index'
Vue.use(store)
```

## Create Store Modules in Vue3

As your applications grows you will need to add more store states. It is best to create different modules to organize your code.

The basic syntax would look like this:

```javascript
// Your module file (ie, ./store/modules/users.js)
const users = {
  state: () => ({
    user: {},
    users: [],
  }),
  mutations: {},
  actions: {},
  getters: {},
}

// Your store index file that holds all the modules (ie, ./store/index.js)
import { createStore } from 'vuex'
import users from './modules/users'

const store = createStore({
  modules: {
    user,
    anotherModule
  }
})

export default store

// In your main.js

import store from './store/index.js'
import Vue from 'vue'

Vue.use(store)...// and other stuff
```

That is it!
