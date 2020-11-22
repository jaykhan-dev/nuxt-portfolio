<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="12" md="6" offset-md="2" lg="3" offset-lg="3">
        <h1 class="display-4 white--text">Riza Khan</h1>
        <p class="subtitle-1 pl-2">Web Developer</p>
        <v-row class="pl-4">
          <v-btn
            outlined
            tile
            class="mt-4 white black--text"
            @click="goToLocation('/projects')"
            >Past Projects</v-btn
          >
        </v-row>
        <v-row class="pl-4">
          <v-btn
            tile
            class="white mt-4 black--text"
            @click="goToLocation('/blog')"
            >Blog</v-btn
          >
        </v-row>
        <v-row class="pl-4">
          <v-btn
            tile
            class="white mt-4 black--text"
            @click="goToLocation('/contact')"
            >Contact</v-btn
          >
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'landing',
  data() {
    return {
      dots: 70,
      interval: 0,
    }
  },
  mounted() {
    this.addDots()
    this.interval = setInterval(() => {
      this.twinkleStar(Math.floor(this.getRandomAritrary(0, this.dots)))
    }, 5000)
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    addDots() {
      const body = document.querySelector('#__layout')
      for (let x = 0; x < this.dots; x++) {
        const dot = document.createElement('div')
        dot.classList.add('dot')
        this.adjustPosition(dot)
        this.determineSize(dot)
        body.appendChild(dot)
      }
    },
    adjustPosition(element) {
      element.style.top = `${this.getRandomAritrary(0, window.innerHeight)}px`
      element.style.right = `${this.getRandomAritrary(0, window.innerWidth)}px`
    },
    determineSize(element) {
      element.style.height = element.style.width = `${this.getRandomAritrary(
        0,
        5
      )}px`
    },
    getRandomAritrary(min, max) {
      return Math.random() * (max - min) + min
    },
    twinkleStar(num) {
      const dotsArray = document.querySelectorAll('.dot')
      dotsArray[num].classList.toggle('twinkle')
    },
    goToLocation(location) {
      const dotsArray = document.querySelectorAll('.dot')
      dotsArray.forEach((dot) => {
        dot.style.right = dot.style.top = '50%'
      })

      setTimeout(() => {
        this.$nuxt.$router.push(location)
      }, 500)
    },
  },
}
</script>

<style>
.dot {
  position: absolute;
  height: 5px;
  width: 5px;
  top: 100px;
  right: 500px;
  border: solid 1px grey;
  background-color: grey;
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.6s ease;
  animation: fade-in 0.5s ease forwards;
}

.twinkle {
  transition: all 0.5s ease;
  animation: twinkle 2s ease forwards;
}

@keyframes fade-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes twinkle {
  0% {
    transform: scale(1);
    border-color: grey;
    background: grey;
  }

  50% {
    transform: scale(1.5);
    border-color: white;
    background: white;
  }

  100% {
    transform: scale(1);
    border-color: grey;
    background: grey;
  }
}
</style>
