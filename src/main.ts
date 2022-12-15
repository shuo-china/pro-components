import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ProComponents from '@pro'

const app = createApp(App)

app.use(ElementPlus)
app.use(ProComponents)
app.mount('#app')
