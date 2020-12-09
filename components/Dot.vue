<template>
  <svg
    ref="dot"
    width="30"
    :style="{ top: x, left: y, opacity: o }"
    height="30"
  >
    <circle cx="15" cy="15" :r="r" stroke-width="4" fill="white" />
  </svg>
</template>

<script>
export default {
  props: {
    x: {
      type: Number,
      required: true,
    },
    y: {
      type: Number,
      required: true,
    },
    r: {
      type: Number,
      required: true,
    },
    o: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      interval: '',
    }
  },
  mounted() {
    this.interval = setInterval(() => {
      this.$refs.dot.style.top = this.randomNumber(0, window.innerHeight)
      this.$refs.dot.style.left = this.randomNumber(0, window.innerWidth)
      this.$refs.dot.style.opacity = this.randomNumber(0, 1)
    }, 1500)
  },
  destroyed() {
    clearInterval(this.interval)
  },
  methods: {
    randomNumber(min, max) {
      return Math.random() * (max - min) + min
    },
  },
}
</script>

<style lang="scss" scoped>
svg {
  position: absolute;
  transition: all 2s ease;
}
</style>
