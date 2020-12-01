<template>
  <svg width="30" :style="{ top: x, left: y, opacity: o }" height="30">
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
}
</script>

<style lang="scss" scoped>
svg {
  position: absolute;
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
    background: grey;
  }

  50% {
    transform: scale(1.5);
    background: white;
  }

  100% {
    transform: scale(1);
    background: grey;
  }
}
</style>
