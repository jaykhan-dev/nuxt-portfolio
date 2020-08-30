---
title: Removing All Subscriptions From Youtube Account
description: A quick script on how to remove all subscripts from your youtube account
previewImage: generic/puppetlogo.png
categories:
- Puppeteer
- Javascript
---

# Removing all of your subscriptions

So your Yoube subscript list has become a little cluttered? Your kids got a hold of your phone and now your subscribed to all kinds of channels you've never heard of? Well its time to purge your entire subscript list with this simple Puppeteer script.

### Initalizing Puppeteer
Pretty much all Puppeteer scripts follow a certain rule:

```javascript
const puppeteer = require('puppeteer')

(async () => {
  const browser = await puppeteer.launch() // Script won't work if you use headless: false
  const page = await browser.newPage()
  await page.goto('https://www.youtube.com')
  // Rest of the code goes here
  await browser.close()
})()
```

### Logging in

So we have initialized the browser and the tab (page). We've told the browser to go to the page.

Since Puppeteer launches a new browser (everytime), you won't be logged in. Therefore you will have to sign in.



