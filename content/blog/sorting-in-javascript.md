---
title: Sorting in Javascript

description: A couple of senarios of sorting in Javascript

previewImage: generic/code.jpg

categories:
  - Javascript

published: true
---

# Sorting

Just a quick overview of sorting. It is a _higher order_ function that mutatates the array it is called on. It also has its own inbuilt functionality so you can just call it and it will sort an array of numbers/strings etc (won't work on objects though).

```javascript
a = ['Zoolander', 'Tim', 'John', 'Andrew']
a.sort()[
  //results
  ('Andrew', 'John', 'Tim', 'Zoolander')
]
```

Sort can take a function which gets two parameters. The `first` value and the `second` value.

```javascript


a = [//arry of items]

a.sort(function(a, b) {
  //some sorting logic
})

```

```javascript
a = []
const { b = [] } = a

b.sort(bySomeProperty)

function bySomeProperty() {}
```

### Sorting logic

This will usually apply when you want do something other then the default sort feature.

```javascript
// use localeCompare to compare strings
// if a is less then b (alphabetically) then it is put first in the array
bySomeProperty(a, b) {
  return a.localeCompare(b)
}


bySomeProperty(a, b) {
  return a[property] - b[property]
}
```
