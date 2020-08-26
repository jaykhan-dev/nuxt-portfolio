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

In this tutorial, we will learn how to create a automated slider(carousel). Please feel free to checkout this sliders **[Codepen](https://codepen.io/riza-khan/pen/dyMveop)**.

Pretty much all of the front-end libraries (ie, Bootstrap, Vuetify) support some kind of feature rich carousel. This is helpful if you are in a hurry, however, it does not allow you to learn the inner workings of Javascript, which, when learnt considerably expand your horizons in-terms of customizability and troubleshooting.

Here we will display content inside of an array of items and we can customize the slider so it displays multiple items at a time. This feature may be useful to most users.

## HTML
Here is the minimum HTML you will need:

```html
<body>
  <div class="slide-container"></div>
</body>
```

Believe it or not, that is all you need. There are additional components we can add (ie, navigation buttons), but we won't worry about that complexity for the time being.

## CSS

Since this is an example, we will try to keep the CSS to a minimum. All that matters right now is that the `.slider` is centered on the screen. The internal slides will dynamically adjust to the parent elements diamensions.

```css
body {
  display: flex;
  height: 100vh; // helps center the .slider vertically
}

.slider {
  margin: auto;
  width: 600px;
  height: 300px;
  border: solid 1px black;
  border-radius:10px;
  overflow: none;
  display: flex; /* This will put the slides next to each other */
}

.slide {
  height: 100%;
  border: solid 1px red
}
```

## Javascript

### Data

We will need to insert some data into the slider, we can initalize that first. This could be anything. Lets start with something very simple:

```javascript
const data = [
  { number: 1, name: 'One' },
  { number: 2, name: 'Two' },
  { number: 3, name: 'Three' },
  { number: 4, name: 'Four' },
  { number: 5, name: 'Five' },
]
```
The number and name will appear on each **slide** element much like a `card` component you may be familiar with from certain CSS frameworks.

### Slider Variables
Lets setup all the variables needed for this animation:

```javascript
const sliderContainer = document.querySelector('.slide-container') // select the slider div
const slidesInContainer = 3; // how many slides do you want to show in the slide container at one time?
const timer = 3000 // seconds between the slider animation
const slideWidth = sliderContainer.offsetWidth / slidesInContainer // determine the width of each slide depending on the width of the sliderContainer
```

### Setting Up `SlideContainer`

Now we have the variables setup,we can setup the `slideContainer` with the `slide` div's. You will see what I am referring to shortly:

```javascript
for (let x = 0; x < slidesInContainer; x++) {
  const slide = document.createElement('div')
  slide.classList.add('slide')
  slide.style.width = `${slideWidth}px`
  slide.style.left = `${slideWidth * x}px`
  setupSlide(slide, x)
  sliderContainer.appendChild(slide)
}
```

If you inspect the HTML in the browser, you will see something like this:
```html
<div class="slide-container">
  <div class="slide"></div>
  <div class="slide"></div>
  <div class="slide"></div>
</div>
```

### Setting Up Each Individual Slide

When we were setting up the slides in the `for` loop, you will also notice that we added a function to which we passed the `slide`. That function will help us add the content inside the slide that is available in our `data` array.

```javascript
function setupSlide(element, dataPosition) {
  let header = document.createElement('h3')
  header.innerText = data[dataPosition].name

  let number = document.createElement('p')
  number.innerText = data[dataPosition].number

  element.appendChild(header)
  element.appendChild(number)
}
```

[Now](Now), we see all that content from the array added to the `slide`. Its not pretty, but hey, we're making progress.

We can work on the CSS later, but we want to get the slider to actually start moving now. But we want to get some concepts out of the way. As a programmer you need to break down the problems in simple steps. Lets do that here!

In order to make the transition seem seemless, we need to do a few things:

1. Create a new `slide` and attach it to before the first one (this is assuming that the slides are moving from left to right).
2.
