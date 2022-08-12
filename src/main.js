import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import Home from './pages/HomePage.vue'
import About from './pages/AboutPage.vue'

const routes = [
  { name: 'userListPage', path: '/', component: Home, children:[
    { name: 'userDetailPage', path: ':/userId', component: About}
  ]},
  
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

const app = createApp(App)
app.use(router)

app.mount('#app')