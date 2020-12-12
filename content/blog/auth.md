---
title: Authentication and Authorization
previewImage: generic/nodejs-logo.jpg
categories:
  - NodeJS
published: true
---

# Authentication

Before we dive ito the technical details lets setup a real life analogy that will allow us to understand the more difficult concepts of authentication.

Say this is medival Europe and you have come upon a castle. In order to get entry into the castle you need to submit a password (and if this is your first time, you would need to register with the magistrate). Once you have setup your password, you give it to the guards at the gate and they will let you in.

However, the village located outside of the castle walls is free to visit without any special permissions. You can transact with vendors located at the village at your convenience.

Assuming you need access to the castle today, you will need to identify yourself, show documentation. Its a whole rig a ma roll. And you need to do that everytime you visit the castle.

Also, when you are inside the castle, you want to move around, we need to make sure you have access to certain places inside the castle. To ensure you are who you say you are, so you identify yourself again and show documentation again.

Wouldn't it just be easier if when you showed identification they gave you some kind of parcement with a unique string of letters that identified you has a registered member of this castle? And that is the basis of authentication. You now have a unique set of strings allow you to access restricted areas of the castle without having to do all the tedios work. Just show the unique string and you are good to go.

## Cookies

Before we go too deep into authentication, we should really explore cookies. They will be an essential part of this discussion.

Since we're exploring this in the context of NodeJS and Express lets spin up a real simple server:

```javascript
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.cookie('key', 'value')
  res.send('Welcome to my app')
})

app.listen(3000)
```

If you were to hit `localhost:3000` you will notice 'Welcome to my app' on the screen. But if you went to your browsers (assuming chrome) Application section in devtools, you will notice under this domain, you will see Cookies.

<dynamic-image filename="auth/cookie1.png"></dynamic-image>

The other thing about cookies is that if they are stored under your domain, they will be sent with every request back to the server for consumption.

