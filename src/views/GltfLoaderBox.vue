<template>
  <canvas ref="canvasRef"></canvas>
</template>

<script setup>
// 引入threejs
import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// 导入gltf加载器
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
// 导入draco解码器
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { withBase } from '@/utils'

const canvasRef = ref(null)

let renderer = null, camera = null, scene = null, animationId = null,
  controls = null, gui = null


function main() {
  // 添加渲染器
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
    // 添加轨道控制器
    controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true // 启用阻尼（惯性）效果
    const axesHelper = new THREE.AxesHelper(5)
    scene.add(axesHelper) // 添加坐标轴辅助器
  }
  {

    // 创建场景fog
    scene.fog = new THREE.Fog(0x999999, 0.1, 50)
    // 创建场景指数fog
    // scene.fog = new THREE.FogExp2(0x999999, 0.1)
    scene.background = new THREE.Color(0x999999)

    // 实例化gltf加载器
    const gltfLoader = new GLTFLoader()
    gltfLoader.load(
      // 模型路径
      withBase('/model/Duck.glb'),
      // 加载完成回调
      (gltf) => {
        scene.add(gltf.scene)
      }
    )
    // 实例化draco加载器
    const dracoLoader = new DRACOLoader()
    // 设置draco路径
    dracoLoader.setDecoderPath(withBase('/draco/'))
    // 设置gltf加载器 draco解码器
    gltfLoader.setDRACOLoader(dracoLoader)

    gltfLoader.load(
      // 模型路径
      withBase('/model/city.glb'),
      // 加载完成回调
      (gltf) => {
        scene.add(gltf.scene)
      }
    )

    // 添加环境光源
    const light = new THREE.AmbientLight(0xffffff, 0.5) // 灯光颜色和强度
    scene.add(light) // 将灯光添加到场景中
    // 添加平行光源
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3) // 灯光颜色和强度
    directionalLight.position.set(-1, 2, 5) // 灯光位置
    scene.add(directionalLight) // 将灯光添加到场景中

    // 创建纹理加载器
    // const textureLoader = new THREE.TextureLoader()
    // 加载纹理图片
    // const texture = track(textureLoader.load(withBase('/texture/door/color.jpg')))
    // const texture = track(getTexture('/texture/door/color.jpg'))

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
// 清理资源
const cleanUp = () => {
  // 1. 停止动画循环
  if (animationId) cancelAnimationFrame(animationId)

  // 2. 释放Three.js资源
  resTracker.dispose() // 释放资源
  // scene.traverse(child => {
  //   if (child.isMesh) {
  //     child.geometry.dispose()
  //     child.material.dispose()
  //     // texture.dispose()   // 释放纹理（如果有）
  //   }
  // })

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

<style lang="scss" scoped>
.loading-text {
  position: fixed;
  top: 0;
  font-size: 20px;
  color: #fff;
  text-align: center;
  z-index: 9998;
  /* 确保文本在其他元素之上 */
}
</style>