---
title: Authentication and Authorization
previewImage: generic/nodejs-logo.jpg
categories:
  - NodeJS
published: true
---

# Authentication

Before we dive ito the technical details lets setup a real world analogy that will allow us to understand the more difficult concepts of authentication.

Say this is medieval Europe and you have come upon a castle. In order to get entry into the castle you need to submit a password (and if this is your first time, you would need to register with the magistrate). Once you have setup your password, you give it to the guards at the gate and they will let you in.

However, the village located outside of the castle walls is free to visit without any special permissions. You can transact with vendors located at the village at your convenience.

Assuming you need access to the castle today, you will need to identify yourself, show documentation. Its a whole rig a ma roll. And you need to do that every time you visit the castle.

Also, when you are inside the castle, you want to move around, we need to make sure you have access to certain places inside the castle. To ensure you are who you say you are, so you identify yourself again and show documentation again.

Wouldn't it just be easier if when you showed identification they gave you some kind of parchment with a unique string of letters that identified you has a registered member of this castle? And that is the basis of authentication. You now have a unique set of strings allow you to access restricted areas of the castle without having to do all the tedious work. Just show the unique string and you are good to go.

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

If you open up your browsers Application tab in devtools you will see the Cookie there under the `localhost:3000` domain.

<dynamic-image filename="auth/cookie1.png"></dynamic-image>

**Another item to consider** is that cookies are sent to the server with every request.

Below, I have added two routes to my simple app. Home and Auth. I then visited each page one after the other.
You will notice right at the bottom of the screenshot that there are two console logs. One from home and one from auth.

That means that every HTTP request I made, included the cookie in the req objects header. This is particularly beneficial when we use JSON WebTokens to authenticate a user.

<dynamic-image filename="auth/cookie2.png" :image-height="800"></dynamic-image>

## JSON WebTokens

Lets first understand what JSON WebTokens are and then we can tie it together with Cookies to help us quickly and easily authenticate new users.

In the image below, you will see a JSON WebToken string on the left. It has three sections that are separated by periods.
Each section represents some kind of information.

On the right, you will see what that section represents when parsed.

<dynamic-image filename="auth/cookie3.png"></dynamic-image>

### Header: Algorithm and token type

When parsed converts to an object which contains:

1. alg: Signature or encryption algorithm
2. typ: Type of token

### Payload: Data

When parsed converts to an object which contains:

1. sub: Subject (whom the token refers to)
2. name
3. iat: Issued at (seconds since Unix epoch)

### Verify Signature

The signature is the encoded version of the Header and Payload on top of the user's secret (a 'password' you could say). The secret is something you specify while creating the JWT. More on this below.

<dynamic-image filename="auth/cookie4.png"></dynamic-image>

On the right hand side, we have our code, where we generate the JWT.

I've written the meaty bits below:

```javascript
const token = jwt.sign({ username: 'rkhan' }, jwtKey, {
  algorithm: 'HS256', // There are many to chose from
  expiresIn: jwtExpiry, // in milliseconds
})
res.cookie('jwtToken', token, { maxAge: jwtExpiry })
```

Here, we are sending the client an JWT token for merely visiting the URL (in a production site it would be based on passing a login process). But I want to emphasis something.

We have set the expiry time to 10 seconds. If you were to visit the `/auth` route now and wait 10 seconds and refresh the page, you will notice that the cookie is now gone. So in a production environment, you would want to set that to something like days or weeks (depending on your requirements).

## CookieParser

One housekeeping item I want to address. Before moving forward with token authentication.
Using the basic code above, you will find the cookies are set inside the request objects `headers`. If there are multiple cookies, they will be included inside of an array of `key=value` pairs that you would need to manually split up, and extract.

There is a great module (`npm i cookie-parser`) which will allow you attack a `cookies` property to the `req` object.

Now you can reference `console.log(req.cookies)` and get back an object. You can see this in action here:

<dynamic-image filename="auth/cookie5.png"></dynamic-image>

Note: The token will be saved under the name you gave it. In our case `jwtToken`. So you can access it like so: `res.cookies.jwtToken`.

Now that we have that cleared up, lets get onto authenticating ourselves:

## Verifying the token

The first line of defence we can use is, if you don't have that token at all... then there is no point verifying anything. Simply redirect to another route.

```javascript
const token = req.cookies.jwtToken
if (!token) {
  return res.redirect('/not-auth')
}
```

Once we get passed that, we can verify our token like so:

```javascript
let payload

try {
  payload = jwt.verify(token, jwtKey)
} catch(e) {
  // Something is wrong with this token. Something isn't an exact match
  return res.redirect('/not-auth)
}

res.send(`Hi ${payload.username}`)
```

All together:
<dynamic-image filename="auth/cookie6.png" :image-height="800"></dynamic-image>

## Sessions

Coming soon! Thanks for reading this far!
