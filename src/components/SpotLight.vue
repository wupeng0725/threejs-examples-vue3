<template>
  <div id="container" ref="containerRef"></div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
// 导入threejs
import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// 导入lil.gui
import { GUI } from 'three/examples/jsm/libs/lil-gui.module.min.js'

const containerRef = ref(null)

let renderer, scene, camera, animationId, gui

const initScene = () => {
  /**
     * 目标：聚光灯
     */

  // 创建场景
  scene = new THREE.Scene()

  // 创建相机
  camera = new THREE.PerspectiveCamera(
    45, // fov视角范围(field 0f view)
    window.innerWidth / window.innerHeight, // aspect画布宽高比，默认是300/150=2
    0.1, // near近平面
    1000 // far远平面
  )
  // 设置相机位置
  // camera.position.z = 5
  // camera.position.y = 2
  // camera.position.x = 2
  camera.position.set(0, 0, 10)
  // 设置相机看向位置（默认原点）
  camera.lookAt(0, 0, 0)
  // 创建渲染器
  renderer = new THREE.WebGLRenderer()
  // 设置渲染器的尺寸
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  // 开启场景中的阴影贴图
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap // 柔和阴影

  // 将画布添加到body中
  containerRef.value.appendChild(renderer.domElement)

  // 添加世界坐标辅助器
  const axeshelper = new THREE.AxesHelper(5)
  scene.add(axeshelper)

  // 添加轨道控制器
  const controls = new OrbitControls(camera, renderer.domElement)

  // 渲染函数
  function animate() {
    animationId = requestAnimationFrame(animate)
    controls.update()
    // 渲染
    renderer.render(scene, camera)
  }

  animate()

  // 创建GUI
  gui = new GUI()

  // 创建球形几何体
  const sphereGeometry = new THREE.SphereGeometry(1, 20, 20)
  const material = new THREE.MeshStandardMaterial()
  const sphere = new THREE.Mesh(sphereGeometry, material)
  // 投射阴影
  sphere.castShadow = true
  scene.add(sphere)

  // 创建平面
  const planeGeometry = new THREE.PlaneGeometry(50, 50)
  const plane = new THREE.Mesh(planeGeometry, material)
  plane.position.set(0, -1, 0)
  plane.rotation.x = -Math.PI / 2
  // 接收阴影
  plane.receiveShadow = true
  scene.add(plane)

  // 灯光
  // 环境光
  const light = new THREE.AmbientLight(0xffffff, 0.5) // 柔和的白光
  scene.add(light)

  // 聚光灯
  const spotLight = new THREE.SpotLight(0xffffff, 0.5)
  spotLight.position.set(5, 5, 5)
  spotLight.castShadow = true
  // 光照强度
  spotLight.intensity = 2

  // 设置阴影模糊度
  spotLight.shadow.radius = 20
  // 设置阴影的分辨率
  spotLight.shadow.mapSize.set(1024, 1024)

  // 设置透视相机的属性
  // spotLight.shadow.camera.near = 1
  // spotLight.shadow.camera.far = 1000
  // spotLight.shadow.camera.fov = 15

  // 设置光源目标
  spotLight.target = sphere
  // scene.add(spotLight.target)
  // 光线照射范围的角度。默认值为 Math.PI/3。
  spotLight.angle = Math.PI / 6
  // 光源照射的最大距离。默认值为 0（无限远）。
  spotLight.distance = 0
  // 聚光锥的半影衰减百分比。默认值为 0。
  spotLight.penumbra = 0
  // 沿着光照距离的衰减量
  spotLight.decay = 0

  scene.add(spotLight)

  gui.add(sphere.position, "x").min(-5).max(5).step(0.1)
  gui.add(spotLight, "angle").min(0).max(Math.PI / 2).step(0.01)
  gui.add(spotLight, "distance").min(0).max(10).step(0.01)
  gui.add(spotLight, "penumbra").min(0).max(1).step(0.01)
  gui.add(spotLight, "decay").min(0).max(5).step(0.01)

  const shadowHelper = new THREE.CameraHelper(spotLight.shadow.camera)
  scene.add(shadowHelper)
}

// 窗口resize处理
const handleResize = () => {
  // 重置渲染器高度比
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  // 重置相机宽高比
  camera.aspect = window.innerWidth / window.innerHeight
  // 更新相机投影矩阵
  camera.updateProjectionMatrix()
}

// 清理资源
const cleanUp = () => {
  containerRef.value.removeChild(renderer.domElement)
  gui?.destroy()
  // 1. 停止动画循环
  if (animationId) cancelAnimationFrame(animationId)

  // 2. 移除事件监听
  window.removeEventListener('resize', handleResize)

  // 3. 释放Three.js资源
  scene.traverse(child => {
    if (child.isMesh) {
      child.geometry.dispose()
      child.material.dispose()
      // texture.dispose()   // 释放纹理（如果有）
    }
  })

  // 4. 销毁渲染器
  renderer.dispose()
  renderer.forceContextLoss()
  renderer.domElement = null
  renderer = null

  // 5. 清理引用
  scene = null
  camera = null
  gui = null
}

onMounted(() => {
  initScene()
  window.addEventListener('resize', handleResize)
})



onBeforeUnmount(() => {
  cleanUp()
})

</script>

<style></style>