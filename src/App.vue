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
import Panel from './components/Panel.vue'
import Empty from './components/Empty.vue'
const PointLight = defineAsyncComponent(() => import('./components/PointLight.vue'))
const SpotLight = defineAsyncComponent(() => import('./components/SpotLight.vue'))
import CodeModel from './components/CodeModel.vue'
import { getComponentCode } from './utils/index.js'

// 模态框数据
const modelData = reactive({
	code: '',
	title: ''
})

const components = {
	PointLight,
	SpotLight
}

const currentComponent = ref('')

const selectViewer = async ({ value, title }) => {
	console.log(value);
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
