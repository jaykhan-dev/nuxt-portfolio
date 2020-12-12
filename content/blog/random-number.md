---
title: Random Numbers (and their uses)
previewImage: generic/js-logo.png
categories:
  - Javascript
published: false
---

# Generating a Random Number

My preferred way to get a random number between a certain range.

```javascript
function randomNumber(min, max) {
  return Math.round(Math.random() * (max - min) - min)
}
```

So `randomNumber(0, 10)` will result in a whole number between 0 and 10.

## Adjustments

Just note that the `Math.round` can be removed entirely if you want to get results with more precision, or adjusted to round up or down. Adjust as you need.
