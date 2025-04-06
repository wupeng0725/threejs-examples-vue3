import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import 'highlight.js/styles/atom-one-dark.css'
import hljsVuePlugin from '@highlightjs/vue-plugin'

createApp(App).use(hljsVuePlugin).mount('#app')
