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

The ultimate purpose of this tutorial is not to create a slider, but rather the thought process required to come up with one, because this is maybe the 100th different way to make one.

Pretty much all of the front-end libraries (ie, Bootstrap, Vuetify) support some kind of feature rich carousel. This is helpful if you are in a hurry, however, it does not allow you to learn the inner workings of Javascript, which, when learnt considerably expand your horizons in-terms of customizability and troubleshooting.

Here we will display content inside of an array of items and we can customize the slider so it displays multiple items at a time. This feature may be useful to most users.

<dynamic-image filename="slider-gif.gif"></dynamic-image>

## HTML
Here is the minimum HTML you will need:

```html
<body>
  <div class="slide-container"></div>
</body>
```

Believe it or not, that is all you need. There are additional components we can add (ie, navigation buttons), but we won't worry about that complexity for the time being.
<img src="~/assets/images/slider.png">
## CSS

Since this is an example, we will try to keep the CSS to a minimum. All that matters right now is that the `.slider` is centered on the screen. The internal slides will dynamically adjust to the parent elements diamensions (more on this coming up).

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
  border: solid 1px red;
  transition: all .5s ease; /* This is important to display a smooth transition vs a quick jump of the slides */
  position: absolute; /* This is critical! The animation will not work without it */
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

### Slider Animation

Now, we see all that content from the array added to the `slide`. Its not pretty, but hey, we're making progress.

As programmers we need to strip down the problem to individual steps. In this case, lets run through what we need to do in order to create a smooth transition.

1. We create another `div` and append as the first-child of the `.slide-container`.
2. We then add the content to that div from the array. Now since we are already showing three slides with number 1, 2, 3 from the data array, the next item will slide in from the left would be number 4.
3. Start the slide animation.
4. Delete the last slide.

Lets illustrate the above in the markup below:

```html
<div class="slide-container">
  <div class="slide"></div> <!-- this would be the newly appended div, and add contents of data[4] to it BEFORE the animation is started -->
  <div class="slide"></div>
  <div class="slide"></div>
  <div class="slide"></div> <!-- this div gets deleted after the animation is complete -->
</div>
```

The following function will take care of steps **1** and **2**.

```javascript
function createSlide(parentElement) {
  const newSlide = document.createElement('div')
  newSlide.classList.add('slide')
  newSlide.style.width = `${slideWidth}px`
  newSlide.style.left = `-${slideWidth}px` // This is important. Position the new slide outside of the container so that the user does not see it.

  parentElement.insertAdjacentElement('afterbegin', newSlide)
  setupSlide(newSlide, data[1]) // We will talk more about why we are specifically passing data[1] to the setupSlide function.

  setTimeout(() => {
    move()
  }, 500)
}
```

Just to recap, we created a slide and then we added it to the DOM via the `insertAdjacentElement` method, *but positioned it outside the element, where `overflow: none;` will hide it from view*. We then used the `setupSlide` method we wrote above to add the contents from the `data` array to it. We are ready to tackle steps **3** and **4**.

But a very important element of this is the `setTimeout` method we are using to prevent that `move` function from running to fast. This is how we achieve that smooth transition from slide to slide.

```javascript
function move() {
  let slides = document.querySelectorAll('.slide')
  slides.forEach(slide => {
    slide.style.left  = `${parseInt(slide.style.left.split('px')[0]) + slideWidth}px`
  })

  setTimeout(() => {
  slides[slides.length - 1].remove()
  }, 500)
}
```

So what this function does is, in conjunction with the CSS rule `transition: all 0.5s ease;` you will see a smooth transition. Once that is complete, we have another `setTimeout` method that will remove the last element of the `slides` array. Again, you want to do this in a `setTimeout` method because without it, the Javascript will simply remove the element before the transition is complete.

