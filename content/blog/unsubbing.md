---
title: Removing All Subscriptions From Youtube Account
description: A quick script on how to remove all subscriptions from a Youtube account
previewImage: generic/puppeteer-logo.png

published: true

categories:
  - Puppeteer
  - Javascript
---

# Removing all of your subscriptions

So your Yoube subscription list has become a little cluttered? Your kids got a hold of your phone and now your subscribed to all kinds of channels you've never heard of? Well its time to purge your entire subscript list with this simple Puppeteer script.

### Initializing Puppeteer

Pretty much all Puppeteer scripts follow a certain rule:

```javascript
const puppeteer = require('puppeteer')(async () => {
  const browser = await puppeteer.launch() // Script won't work if you use headless: false
  const page = await browser.newPage()
  await page.goto('https://www.youtube.com')
  // See below for what should go here
  await browser.close()
})()
```

### Logging in

So we have initialized the browser and the tab (page). We've told the browser to go to the page.

Since Puppeteer launches a new browser (every time), you won't be logged in. Therefore you will have to sign in and probably have to deal with Google's phone verification if you have that on.

The nice thing about that is, Puppeteer will listen for that authorization, so it will wait while you you confirm you are the one signing in from another device. Totally cool.

So in order to do that:

```javascript
const signInButton = await page.waitForSelector('paper-button[aria-labe=Sign in]')
await signInButton.click()
await page.waitForNavigation()

// Enter Email
const emailInput = await page.waitForSelector('input[type=email]')
await emailInput.type("myemail@gmail.com")
await page.keyboard.press('Enter')
await page.waitForNavigation()

// Enter Password
const passwordInput = await page.waitForSelector('input[type=password]')
const passwordInput.click({ clickCount: 3 })
await page.keyboard.type('password1234')
await page.keyboard.press('Enter')

// This is where Google Authentication sends request to your phone (if you have it setup)
await page.waitForNavigation()

// Once you confirm, it will route again to a different page, so we need to wait for Navigation again
await page.waitForNavigation()

// You can rerouted to your home page. However, the actual feed page is buried under a couple of clicks. Therefore, we're just going to go to it directly.
await page.goto("https://www.youtube.com/feed/channels")

// Start the process to remove all the channels (warning, this might take a while)
var allSubscribeButtons = await page.$$(".ytd-subscribe-button-renderer")

for (let x = 0; x < subscribeButton.length; x++) {
  await page.goto('https://www.youtube.com/feed/channels')
  await page.click('.ytd-subscribe-button-renderer')
  await page.click("paper-button[aria-label=Unsubscribe]")
}

await browser.close()
```
