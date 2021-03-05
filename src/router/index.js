import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Experiences from '../views/Experiences.vue'
import Skills from '../views/Skills.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/experiences',
    name: 'Experiences',
    component: Experiences
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: Portfolio
  },
  { path: '/*', component: Home }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router


