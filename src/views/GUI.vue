<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
// 引入threejs
import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// 导入lil-gui
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'

import { onBeforeUnmount, onMounted, ref } from 'vue'

const canvasRef = ref(null)

let renderer = null, camera = null, scene = null, animationId = null, controls = null, gui = null

function main() {
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true // 抗锯齿
  })
  // 创建透视相机
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(1, 2, 4)
  // 创建场景
  scene = new THREE.Scene()

  {
    // 添加环境光源
    const light = new THREE.AmbientLight(0xffffff, 0.5) // 灯光颜色和强度
    scene.add(light) // 将灯光添加到场景中
    // 添加平行光源
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3) // 灯光颜色和强度
    directionalLight.position.set(-1, 2, 5) // 灯光位置
    scene.add(directionalLight) // 将灯光添加到场景中
  }
  {
    // 添加世界坐标系
    const axesHelper = new THREE.AxesHelper(5)
    scene.add(axesHelper)
    // 添加轨道控制器
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true // 启用阻尼（惯性）效果
    controls.dampingFactor = 0.25 // 阻尼系数
    // controls.autoRotate = true // 自动旋转
    // controls.autoRotateSpeed = 1.0 // 旋转速度
  }
  {
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)

    gui = new GUI()
    gui.addColor({ color: 0x44aa88 }, 'color').name('立方体颜色').onChange((value) => {
      material.color.set(value)
    })
    gui.add(material, 'wireframe').name('线框模式')
    const folder = gui.addFolder('立方体位置')
    folder.add(cube.position, 'x').min(-10).max(10).step(1).name('立方体x轴位置').onChange((val) => {
      console.log('立方体x轴位置', val)
    })
    folder.add(cube.position, 'y').min(-10).max(10).step(1).name('立方体y轴位置').onFinishChange((val) => {
      console.log('立方体y轴位置', val)
    })
    folder.add(cube.position, 'z').min(-10).max(10).step(1).name('立方体z轴位置')
    const sizeFolder = gui.addFolder('立方体大小')
    sizeFolder.add(cube.scale, 'x').min(0.1).max(10).step(0.01).name('立方体X轴大小').onChange((val) => {
      console.log('立方体X轴大小', val)
    })
    sizeFolder.add(cube.scale, 'y').min(0.1).max(10).step(0.01).name('立方体Y轴大小').onChange((val) => {
      console.log('立方体Y轴大小', val)
    })
    sizeFolder.add(cube.scale, 'z').min(0.1).max(10).step(0.01).name('立方体Z轴大小').onChange((val) => {
      console.log('立方体Z轴大小', val)
    })
  }
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

  // 4. 销毁GUI和控制器
  controls.dispose() // 释放控制器资源
  controls = null
  gui.destroy() // 销毁GUI实例
  gui = null

  // 4. 清理引用
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