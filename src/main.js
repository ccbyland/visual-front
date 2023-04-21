import { createApp } from 'vue'
import VueGridLayout from 'vue-grid-layout'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.jsx'
import router from './router'
import './assets/style/index.scss'

const app = createApp(App)

app.use(VueGridLayout)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
