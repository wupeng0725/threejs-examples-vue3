<template>
  <canvas ref="canvasRef"></canvas>
  <div v-if="isHDRLoaded" class="loading-text">HDR贴图加载较为缓慢，请稍等片刻</div>
</template>

<script setup>
// 引入threejs
import * as THREE from 'three'
// 导入轨道控制器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
// 导入lil-gui
import { GUI } from 'three/addons/libs/lil-gui.module.min.js'
// 导入hdr加载器
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { getTexture } from '@/utils/textureLoader'
import { withBase } from '@/utils'

const canvasRef = ref(null)
const isHDRLoaded = ref(true)

let renderer = null, camera = null, scene = null, animationId = null,
  controls = null, gui = null

// 释放资源
class ResourceTracker {

  constructor() {

    this.resources = new Set()

  }
  track(resource) {

    if (!resource) {

      return resource

    }

    // handle children and when material is an array of materials or
    // uniform is array of textures
    if (Array.isArray(resource)) {

      resource.forEach(resource => this.track(resource))
      return resource

    }

    if (resource.dispose || resource instanceof THREE.Object3D) {

      this.resources.add(resource)

    }

    if (resource instanceof THREE.Object3D) {

      this.track(resource.geometry)
      this.track(resource.material)
      this.track(resource.children)

    } else if (resource instanceof THREE.Material) {

      // We have to check if there are any textures on the material
      for (const value of Object.values(resource)) {

        if (value instanceof THREE.Texture) {

          this.track(value)

        }

      }

      // We also have to check if any uniforms reference textures or arrays of textures
      if (resource.uniforms) {

        for (const value of Object.values(resource.uniforms)) {

          if (value) {

            const uniformValue = value.value
            if (uniformValue instanceof THREE.Texture ||
              Array.isArray(uniformValue)) {

              this.track(uniformValue)

            }

          }

        }

      }

    }

    return resource

  }
  untrack(resource) {

    this.resources.delete(resource)

  }
  dispose() {

    for (const resource of this.resources) {

      if (resource instanceof THREE.Object3D) {

        if (resource.parent) {

          resource.parent.remove(resource)

        }

      }

      if (resource.dispose) {

        resource.dispose()

      }

    }

    this.resources.clear()

  }

}
const resTracker = new ResourceTracker()

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
    const track = resTracker.track.bind(resTracker)

    // 创建纹理加载器
    // const textureLoader = new THREE.TextureLoader()
    // 加载纹理图片
    // const texture = track(textureLoader.load(withBase('/texture/door/color.jpg')))
    const texture = track(getTexture('/texture/door/color.jpg'))
    texture.colorSpace = THREE.SRGBColorSpace // 设置颜色空间为sRGB
    // 加载ao贴图
    // const aoMap = track(textureLoader.load(withBase('/texture/door/ambientOcclusion.jpg')))
    const aoMap = track(getTexture('/texture/door/ambientOcclusion.jpg'))
    // 加载透明度贴图
    // const alphaMap = track(textureLoader.load(withBase('/texture/door/alpha.jpg')))
    const alphaMap = track(getTexture('/texture/door/alpha.jpg'))
    // 加载光照贴图
    // const lightMap = track(textureLoader.load(withBase('/texture/colors.png')))
    // 加载高光贴图
    // const specularMap = track(textureLoader.load(withBase('/texture/door/specular.jpg')))
    const specularMap = track(getTexture('/texture/door/specular.jpg'))

    const plane = track(new THREE.PlaneGeometry(1, 1))
    const material = track(new THREE.MeshBasicMaterial({
      color: 0xffffff,
      map: texture, // 设置纹理贴图
      aoMap: aoMap, // 设置ao贴图
      aoMapIntensity: 1, // 设置ao贴图强度
      alphaMap: alphaMap, // 设置透明度贴图
      transparent: true, // 开启透明度
      // lightMap: lightMap, // 设置光照贴图
      // lightMapIntensity: 1, // 设置光照贴图强度
      specularMap: specularMap, // 设置高光贴图
      reflectivity: 1, // 环境贴图对表面的影响程度
    }))
    const mesh = track(new THREE.Mesh(plane, material))
    scene.add(mesh)

    // RGBELoader 加载hdr贴图
    const rgbeLoader = new RGBELoader()
    track(rgbeLoader.load(withBase('/texture/Alex_Hart-Nature_Lab_Bones_2k.hdr'), (envMap) => {
      // 设置球形映射
      envMap.mapping = THREE.EquirectangularReflectionMapping
      // 设置背景贴图
      scene.background = envMap
      // 设置环境贴图-若该值不为null，则该纹理贴图将会被设为场景中所有物理材质的环境贴图
      // 可以模拟环境光
      scene.environment = envMap
      // 设置plane的环境贴图
      material.envMap = envMap
      isHDRLoaded.value = false // hdr贴图加载完成
    }))

    gui = new GUI()
    gui.add(material, 'aoMapIntensity').min(0).max(1).name('ao贴图强度')
    gui.add(material, 'reflectivity').min(0).max(1).name('反射强度')
    gui.add(material, 'transparent').name('开启透明度').onChange(() => {
      material.needsUpdate = true // 更新材质
    })
    gui.add(texture, 'colorSpace', {
      sRGB: THREE.SRGBColorSpace,
      Linear: THREE.LinearSRGBColorSpace,
    }).onChange(() => {
      texture.needsUpdate = true
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
  z-index: 9998; /* 确保文本在其他元素之上 */
}
</style>