<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
// 引入threejs
import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvasRef = ref(null)

let renderer = null, camera = null, scene = null, animationId = null, controls = null

function main() {
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true // 抗锯齿
  })
  // 创建透视相机
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(3, 3, 3)
  // 创建场景
  scene = new THREE.Scene()

  // 添加世界坐标系
  const axesHelper = new THREE.AxesHelper(5)
  scene.add(axesHelper)
  // 添加轨道控制器
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true // 启用阻尼（惯性）效果
  controls.dampingFactor = 0.25 // 阻尼系数
  // controls.autoRotate = true // 自动旋转
  // controls.autoRotateSpeed = 1.0 // 旋转速度
  

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0x44aa88 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)
}

/**
 * 检查渲染器的canvas尺寸是不是和canvas的显示尺寸不一样 如果不一样就设置它。
 * @param renderer 
 */
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement
  // 不处理分辨率
  // const width = canvas.clientWidth
  // const height = canvas.clientHeight
  // 
  // 处理分辨率显示--应对HD-DPI显示器
  const pixelRatio = window.devicePixelRatio
  const width = Math.floor(canvas.clientWidth * pixelRatio)
  const height = Math.floor(canvas.clientHeight * pixelRatio)
  const needResize = canvas.width !== width || canvas.height !== height
  if (needResize) {
    renderer.setSize(width, height, false)
  }
  return needResize
}
// 清理资源
const cleanUp = () => {
  // 1. 停止动画循环
  if (animationId) cancelAnimationFrame(animationId)

  // 2. 释放Three.js资源
  scene.traverse(child => {
    if (child.isMesh) {
      child.geometry.dispose()
      child.material.dispose()
      // texture.dispose()   // 释放纹理（如果有）
    }
  })

  // 3. 销毁渲染器
  renderer.dispose()
  renderer.forceContextLoss()
  renderer.domElement = null
  renderer = null

  // 4. 销毁控制器
  controls.dispose()
  controls = null

  // 5. 清理引用
  scene = null
  camera = null
  canvasRef.value = null
}

function animate() {
  controls.update() // 更新控制器
  if (resizeRendererToDisplaySize(renderer)) {
    const canvas = renderer.domElement
    camera.aspect = canvas.clientWidth / canvas.clientHeight
    camera.updateProjectionMatrix()
  }
  // 将场景和摄像机传递给渲染器来渲染出整个场景
  renderer.render(scene, camera)
  animationId = requestAnimationFrame(animate)
}

onMounted(() => {
  main()
  requestAnimationFrame(animate)
})

onBeforeUnmount(() => {
  cleanUp()
})

</script>

<style lang="scss" scoped></style>