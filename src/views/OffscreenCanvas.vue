<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
// 引入threejs
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { state, init, pickPosition } from '@/workers/shared-picking.js'

const canvasRef = ref(null)

let worker

function startWorker() {
  const offscreen = canvasRef.value.transferControlToOffscreen()
  worker = new Worker(new URL('@/workers/offscreencanvas-cubes.js', import.meta.url), { type: 'module' })
  worker.postMessage({ type: 'init', canvas: offscreen }, [offscreen])
  window.addEventListener('resize', sendSize)
  sendSize()
}
function sendMouse(x, y) {
  if (canvasRef.value.transferControlToOffscreen) {
    worker.postMessage({
      type: 'mouse',
      x,
      y,
    })
  } else {
    pickPosition.x = x
    pickPosition.y = y
  }
}
function sendSize() {
  if (canvasRef.value.transferControlToOffscreen) {
    worker.postMessage({
      type: 'size',
      width: canvasRef.value.clientWidth,
      height: canvasRef.value.clientHeight,
    })
  } else {
    state.width = canvasRef.value.clientWidth
    state.height = canvasRef.value.clientHeight
  }
}

function startMainPage() {
  init({ canvas: canvasRef.value })
  window.addEventListener('resize', sendSize)
  sendSize()
}
function getCanvasRelativePosition(event) {

  const rect = canvasRef.value.getBoundingClientRect()
  return {
    x: (event.clientX - rect.left) * canvasRef.value.width / rect.width,
    y: (event.clientY - rect.top) * canvasRef.value.height / rect.height,
  }

}

function setPickPosition(event) {

  const pos = getCanvasRelativePosition(event)
  sendMouse(
    (pos.x / canvasRef.value.width) * 2 - 1,
    (pos.y / canvasRef.value.height) * - 2 + 1) // note we flip Y

}

function clearPickPosition() {

  // unlike the mouse which always has a position
  // if the user stops touching the screen we want
  // to stop picking. For now we just pick a value
  // unlikely to pick something
  sendMouse(- 100000, - 100000)

}
function main() {
  if (canvasRef.value.transferControlToOffscreen) {
    startWorker()
  } else {
    startMainPage()
  }
  clearPickPosition()

  window.addEventListener('mousemove', setPickPosition)
  window.addEventListener('mouseout', clearPickPosition)
  window.addEventListener('mouseleave', clearPickPosition)
}

// 清理资源
const cleanUp = () => {
  canvasRef.value = null

  if (worker) {
    worker.terminate()
  }

}

onMounted(() => {
  main()
})

onBeforeUnmount(() => {
  cleanUp()
  window.removeEventListener('resize', sendSize)
  window.removeEventListener('mousemove', setPickPosition)
  window.removeEventListener('mouseout', clearPickPosition)
  window.removeEventListener('mouseleave', clearPickPosition)
})
</script>

<style lang="scss" scoped></style>