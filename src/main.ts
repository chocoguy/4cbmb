import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
import "./main.css"


const app = createApp(App)
app.use(VueLazyload)
app.use(router)
app.mount('#app')
