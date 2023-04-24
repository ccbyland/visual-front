import { createApp } from 'vue'
import VueGridLayout from 'vue-grid-layout'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import initEcharts from '@/packages/echarts'
import initAPI from '@/api/index.js'
import App from './App.jsx'
import router from './router'
import store from './store/index.js'
import './assets/style/index.scss'

const app = createApp(App)

app.use(VueGridLayout)
app.use(ElementPlus)
app.use(router)
app.use(store)

initEcharts(app)
initAPI(app)

app.mount('#app')
