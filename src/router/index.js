import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/personalPerformance',
    name: 'PersonalPerformance',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "PersonalPerformance" */ '../views/PersonalPerformance.vue')
  }, 
  {
    path: '/HR_Shared',
    name: 'HR_Shared',
    component: () => import(/* webpackChunkName: "HR_Shared" */ '../views/HR_Shared.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
