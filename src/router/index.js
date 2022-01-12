import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import two from '../views/two.vue'
import one from '../views/one.vue'
import three from '../views/three.vue'
const  index= () => import('../pages/layout/index')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    redirect: '/home',
    children:[
      {path:'/home',component:home},
      {path:'/lie/one',component:one},
      {path:'/lie/two',component:two},
      {path:'/lie/three',component:three},
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
