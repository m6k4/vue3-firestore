import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import 'font-awesome/css/font-awesome.css'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')
