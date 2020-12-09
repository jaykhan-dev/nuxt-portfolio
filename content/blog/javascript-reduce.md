---
title: Array Method - Reduce

description: What is reduce and how to use it?

previewImage: generic/js-logo.png

categories:
  - Javascript

published: true
---

# Reduce

Reduce is a higher order array method that can be used on arrays. It essentially returns a single value (hence the name 'reduce').

Its most basic usage can be finding a sum of an array of numbers (among other things).

ie: [1, 2, 3] = 6

The reduce method is called on an array which receives a function and initial value as parameters..

```javascript
const sum = [1, 2, 3].reduce((a, b) => a + b, 0)
```

The function then gets the intial value, of zero in this case. Which the function uses as its parameter for every iteration of the array.

So it looks something like this:

1. 0 + 1 = 1
2. 1 + 2 = 3
3. 3 + 3 = 6
