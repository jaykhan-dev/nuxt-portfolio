---
title: Automated Slider

description: A tutorial on how to build a automated slider in vanilla JS

previewImage: ~/assets/images/slider.png

categories:
- Vanilla Javascript

images:
-

---

# Automated Slider

In this tutorial, I will explain how to create a automated slider. Pretty much all of the front-end libraries (ie, Bootstrap, Vuetify) support some kind of feature rich carousel.

This is helpful if you are in a hurry, however, it does not allow you to learn the inner workings of Javascript, which, when learnt considerably expand your horizons in-terms of customizability and troubleshooting.

Here we will display content inside of an array of items and we can customize the slider so it displays multiple items at a time. This feature may be useful to most users.

## HTML
Here is the minimum HTML you will need:

```html
<body>
  <div class="slider"></div>
</body>
```

Believe it or not, that is all you need. There are additional components we can add (navigation buttons?), but we won't work about that complexity for the time being.

## CSS
Since this is an example, we will try to keep the CSS to a minimum. All that matters right now is that the `.slider` is centered on the screen. Since the slides themselves will be responsive, it doesn't matter if we specify a width, however, for this case we will explicitly put it at `600px` width. The height can be anything that you are comfortable with.

```css
body {
  display: flex;
  height: 100vh; // helps center the .slider vertically
}

.slider {
  margin: auto;
  width: 600px;
  height: 300px;
  boder: solid 1px black;
  border-radius:10px;
  overflow: none;
}
```

