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

let renderer = null, camera = null, scene = null, animationId = null, controls = null, cubes = []

function main() {
  // 创建渲染器
  renderer = new THREE.WebGLRenderer({
    canvas: canvasRef.value,
    antialias: true // 抗锯齿
  })
  // 创建透视相机
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(2, 2, 5)
  camera.lookAt(0, 0, 0)

  // 创建场景
  scene = new THREE.Scene()

  {
    // 添加世界坐标辅助器
    const axeshelper = new THREE.AxesHelper(5)
    scene.add(axeshelper)
    // 添加轨道控制器
    controls = new OrbitControls(camera, renderer.domElement)
  }

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  function makeInstance(geometry, color, x) {
    const material = new THREE.MeshBasicMaterial({ color })
    const cube = new THREE.Mesh(geometry, material)

    // 将网格添加到场景中
    scene.add(cube)

    cube.position.x = x

    return cube
  }
  cubes = [
    makeInstance(geometry, 0x44aa88, 0),
    makeInstance(geometry, 0x8844aa, -2),
    makeInstance(geometry, 0xaa8844, 2)
  ]


  // 设置三个正方体的包围盒
  let box = new THREE.Box3()
  for (let i = 0; i < cubes.length; i++) {
    const cube = cubes[i]
    let box3 = new THREE.Box3().setFromObject(cube)
    box.union(box3) // 合并包围盒

    // 设置每个正方体的包围球
    cube.geometry.computeBoundingSphere() // 计算包围球
    // 计算包围球的中心和半径
    let sphere = cube.geometry.boundingSphere
    sphere.applyMatrix4(cube.matrixWorld) // 将包围球应用到正方体的世界矩阵上
    // 创建包围球辅助器
    let sphereHelper = new THREE.SphereGeometry(sphere.radius, 16, 16) // 创建包围球几何体
    let sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true }) // 创建包围球材质
    let sphereMesh = new THREE.Mesh(sphereHelper, sphereMaterial) // 创建包围球网格
    sphereMesh.position.copy(sphere.center) // 设置包围球的位置为包围球的中心
    scene.add(sphereMesh) // 将包围球网格添加到场景中
  }
  // 设置包围盒可视化辅助器
  let helper = new THREE.Box3Helper(box, 0xffff00) // 创建包围盒辅助器
  scene.add(helper)
}

/**
 * 检查渲染器的canvas尺寸是不是和canvas的显示尺寸不一样 如果不一样就设置它。
 * @param renderer 
 */
function resizeRendererToDisplaySize(renderer) {
  const canvas = renderer.domElement
  // 不处理分辨率
  const width = canvas.clientWidth
  const height = canvas.clientHeight
  // 处理分辨率显示--应对HD-DPI显示器
  // const pixelRatio = window.devicePixelRatio
  // const width = Math.floor(canvas.clientWidth * pixelRatio)
  // const height = Math.floor(canvas.clientHeight * pixelRatio)
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
  cubes = []
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