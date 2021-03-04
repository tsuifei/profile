import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Profile from '../views/Profile.vue'
import Skills from '../views/Skills.vue'
import Portfolio from '../views/Portfolio.vue'



const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Bienvenue sur TsuiFei profile !'
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/skills',
    name: 'Skills',
    component: Skills
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio
  },
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


