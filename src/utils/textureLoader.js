// 📂 utils/textureLoader.js
import * as THREE from 'three'
// 导入hdr加载器
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js'
import { withBase } from './index'

// 全局缓存对象
const textureCache = {}

export const preloadTextures = (textureUrls) => {
  const textLoader = new THREE.TextureLoader()
  const rgbeLoader = new RGBELoader()
  return Promise.all(
    textureUrls.map(url => {
      if (!textureCache[url]) {
        return new Promise((resolve, reject) => {
          const loader =
            url.includes('hdr') ? rgbeLoader : textLoader // 根据url判断使用哪个加载器
          loader.load(
            withBase(url), // 使用 withBase 函数处理路径
            (texture) => {
              textureCache[url] = texture
              resolve()
            },
            undefined,
            (err) => reject(err)
          )
        })
      }
      return Promise.resolve()
    })
  )
}

export const getTexture = (url) => textureCache[url]

/**
 * // 📂 App.vue
 * 在 根组件 或 路由入口 预加载：
import { preloadTextures } from '@/utils/textureLoader';

export default {
  created() {
    const texturesToPreload = [
      '/textures/wood.jpg',
      '/textures/metal.png'
    ];
    preloadTextures(texturesToPreload)
      .catch(err => console.error('Texture preload failed:', err));
  }
};
 * 在子组件中 直接使用缓存：
// 📂 components/SceneComponent.vue
import { getTexture } from '@/utils/textureLoader';

export default {
  mounted() {
    const texture = getTexture('/textures/wood.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    // 创建网格等操作...
  }
};                          
 */