<template>
	<div id="wrapper">
		<Panel @componentChange="selectViewer" />
		<div id="viewer">
			<Suspense v-if="currentComponent">
				<!-- 具有深层异步依赖的组件 -->
				<component :is="components[currentComponent]" />
				<!-- 在 #fallback 插槽中显示 “正在加载中” -->
				<template #fallback>
					Loading...
				</template>
			</Suspense>
			<Empty v-else />
			<CodeModel v-if="currentComponent" :modelData="modelData" />
		</div>
	</div>
</template>

<script setup>
import { defineAsyncComponent, reactive, ref } from 'vue'
import Panel from './components/Panel/Panel.vue'
import Empty from './components/Empty.vue'
import CodeModel from './components/CodeModel.vue'
const PointLight = defineAsyncComponent(() => import('./views/PointLight.vue'))
const SpotLight = defineAsyncComponent(() => import('./views/SpotLight.vue'))
const ThreeBox = defineAsyncComponent(() => import('./views/ThreeBox.vue'))
const OrbitControls = defineAsyncComponent(() => import('./views/OrbitControls.vue'))
const PrimitivesGeometry = defineAsyncComponent(() => import('./views/PrimitivesGeometry.vue'))
const GUI = defineAsyncComponent(() => import('./views/GUI.vue'))
const Texture = defineAsyncComponent(() => import('./views/Texture.vue'))
const GltfLoaderBox = defineAsyncComponent(() => import('./views/GltfLoaderBox.vue'))
const RaycasterBox = defineAsyncComponent(() => import('./views/RaycasterBox.vue'))
const OffscreenCanvas = defineAsyncComponent(() => import('./views/OffscreenCanvas.vue'))
const TweenBox = defineAsyncComponent(() => import('./views/TweenBox.vue'))
const BoundingBox = defineAsyncComponent(() => import('./views/BoundingBox.vue'))

import { getComponentCode } from '@/utils'
import { preloadTextures } from '@/utils/textureLoader'

const texturesToPreload = [
	'/texture/door/color.jpg',
	'/texture/door/ambientOcclusion.jpg',
	'/texture/door/alpha.jpg',
	'/texture/door/specular.jpg',
]
preloadTextures(texturesToPreload)
	.catch(err => console.error('Texture preload failed:', err))

// 模态框数据
const modelData = reactive({
	code: '',
	title: ''
})

const components = {
	PointLight,
	SpotLight,
	ThreeBox,
	PrimitivesGeometry,
	OrbitControls,
	GUI,
	Texture,
	GltfLoaderBox,
	RaycasterBox,
	OffscreenCanvas,
	TweenBox,
	BoundingBox
}

const currentComponent = ref('')

const selectViewer = async ({ value, title }) => {
	console.log(value)
	currentComponent.value = value
	modelData.code = await getComponentCode(value)
	modelData.title = title
}
</script>

<style>
#app {
	width: 100%;
	height: 100vh;
}

#wrapper {
	width: 100%;
	height: 100%;
}

#viewer {
	position: absolute;
	left: 300px;
	right: 0;
	width: calc(100% - 300px);
	height: 100%;
}

canvas {
	width: 100%;
	height: 100%;
	display: block;
}

#container {
	position: absolute;
	left: 0;
	right: 0;
	width: 100%;
	height: 100%;
}
</style>
