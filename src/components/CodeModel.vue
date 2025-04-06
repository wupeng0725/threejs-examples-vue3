<template>
  <Teleport to="body">
    <div v-if="open" class="modal" ref="modelRef">
      <div class="model-header">
        <div class="model-title">源码：{{ modelData.title }}</div>

        <div class="model-tag-box">
          <span class="model-tag-copy" @click="onCopy">{{ copyText }}</span>
          <span class="model-tag-fullscreen" @click="onFullScreen">全屏</span>
          <span class="model-tag-close" @click="open = false">×</span>
        </div>
      </div>
      <div class="model-content">
        <highlightjs language="XML" :autodetect="false" :code="modelData.code"></highlightjs>
      </div>
    </div>
  </Teleport>
  <span @click="open = true" class="checkcode">查看源码</span>
</template>

<script setup>
import 'highlight.js/lib/common'
import { ref } from 'vue'
const props = defineProps({
  modelData: Object
})

const open = ref(false)

const copyText = ref('复制原文')
const onCopy = async () => {
  try {
    await navigator.clipboard.writeText(props.modelData.code)
    copyText.value = '复制成功'
  } catch (error) {
    console.log('无法复制内容到剪切板', error)
    copyText.value = '复制失败'
  }
  setTimeout(() => {
    copyText.value = '复制原文'
  }, 1500)
}

const modelRef = ref(null)
const onFullScreen = () => {
  modelRef.value?.requestFullscreen()
}
</script>

<style lang="scss" scoped>
@mixin model-tag {
  cursor: pointer;

  &:hover {
    color: aquamarine;
  }
}

.modal {
  position: fixed;
  z-index: 9999;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  min-height: 500px;
  box-shadow: 7px 7px 15px 0 #ccc;
  padding: 20px;
  background-color: #fff;
}

.model-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .model-title {
    font-weight: 700;
    font-size: 20px;
  }
  .model-tag-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 15%;
    font-size: 14px;
  }

  .model-tag-close {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    font-size: 28px;
    padding-bottom: 3px;
    @include model-tag;
  }
  .model-tag-copy {
    @include model-tag;
  }
  .model-tag-fullscreen {
    @include model-tag;
  }
}

.model-content {
  max-height: 600px;
  overflow: auto;
}

.checkcode {
  position: fixed;
  bottom: 10px;
  left: 310px;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: aquamarine;
  }
}
</style>