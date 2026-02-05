<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
const colorMode = useColorMode()

// mouse target
const targetX = ref(0)
const targetY = ref(0)

// smooth follow
const x = ref(0)
const y = ref(0)

let animationId = null
let lastMove = Date.now()

// click flash burst
const burst = ref(0)

// idle shake offset
const shakeX = ref(0)
const shakeY = ref(0)

function onMouseMove(e) {
  targetX.value = e.clientX
  targetY.value = e.clientY
  lastMove = Date.now()
}

function onClick() {
  burst.value = 1
  setTimeout(() => (burst.value = 0), 120)
}

// flicker random intensity
function flicker() {
  return 0.1 + Math.random() * 0.06
}

// animation loop
function animate() {
  // smooth lerp follow
  x.value += (targetX.value - x.value) * 0.15
  y.value += (targetY.value - y.value) * 0.15

  // idle shake if no move
  const idle = Date.now() - lastMove > 500
  if (idle) {
    shakeX.value = (Math.random() - 0.5) * 6
    shakeY.value = (Math.random() - 0.5) * 6
  } else {
    shakeX.value = 0
    shakeY.value = 0
  }

  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  // init center
  x.value = window.innerWidth / 2
  y.value = window.innerHeight / 2
  targetX.value = x.value
  targetY.value = y.value

  window.addEventListener('mousemove', onMouseMove)
  window.addEventListener('click', onClick)

  animate()
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  window.removeEventListener('click', onClick)
  cancelAnimationFrame(animationId)
})

/**
 * Cone flashlight beam effect
 */
const spotlightStyle = computed(() => {
  const px = x.value + shakeX.value
  const py = y.value + shakeY.value

  // burst makes it brighter
  const burstBoost = burst.value ? 0.25 : 0

  return {
    background: `
      radial-gradient(
        ellipse 280px 180px at ${px}px ${py}px,
        rgba(255,255,210,${flicker() + burstBoost}),
        rgba(0,0,0,0.95) 78%
      )
    `,
  }
})
</script>

<template>
  <div v-if="colorMode.value === 'dark'">
    <!-- flashlight overlay -->
    <div
      class="pointer-events-none fixed inset-0 z-[9999]"
      :style="spotlightStyle"
    />

    <!-- grain overlay -->
    <div
      class="pointer-events-none fixed inset-0 z-[10000] opacity-[0.10] mix-blend-overlay"
    />
  </div>
</template>
