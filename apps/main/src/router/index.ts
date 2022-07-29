// router.js
import { createRouter, createWebHistory } from 'vue-router'
import layout from '../layout/index.vue'

export const routes = [
  {
    path: '/',
    redirect: '/react'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue'),
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/404.vue'),
  },
]

export const dynamicRoutes = [
  {
    path: '/react/:page*',
    name: 'react',
    component: layout,
    meta: {
      title: 'react',
      icon: '',
    },
    redirect: '/react/subpage1',
    children: [
      {
        path: 'subpage1',
        name: 'subpage1',
        component: () => import('../components/SubPage'),
        meta: {
          title: 'subpage1',
          icon: '',
          appName: 'react',
          url: 'http://localhost:9001/',
          baseroute: '/react'
        },
      },
      {
        path: 'subpage2',
        name: 'subpage2',
        component: () => import('../components/SubPage'),
        meta: {
          title: 'subpage2',
          icon: '',
          appName: 'react',
          url: 'http://localhost:9001/',
          baseroute: '/react'
        },
      }
    ]
  },
  {
    path: '/vue/:page*',
    name: 'vue',
    component: layout,
    meta: {
      title: 'vue',
      icon: '',
    },
    children: [
      {
        path: 'subpage1',
        name: 'vuesubpage1',
        component: () => import('../components/SubPage'),
        meta: {
          title: 'subpage1',
          icon: '',
          appName: 'vue',
          url: 'http://localhost:9002/',
          baseroute: '/vue'
        },
      },
      {
        path: 'subpage2',
        name: 'vuesubpage2',
        component: () => import('../components/SubPage'),
        meta: {
          title: 'subpage2',
          icon: '',
          appName: 'vue',
          url: 'http://localhost:9002/',
          baseroute: '/vue'
        },
      }
    ]
  },
  {
    path: '/vite/:page*',
    name: 'vite',
    component: layout,
    meta: {
      title: 'vite',
      icon: '',
    },
    children: [
      {
        path: 'subpage1',
        name: 'vitesubpage1',
        component: () => import('../views/subpage1.vue'),
        meta: {
          title: 'subpage1',
          icon: '',
          appName: 'vite',
          url: '',
          baseroute: ''
        },
      },
      {
        path: 'subpage2',
        name: 'vitesubpage2',
        component: () => import('../views/subpage2.vue'),
        meta: {
          title: 'subpage2',
          icon: '',
          appName: 'vite',
          url: '',
          baseroute: ''
        },
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes,...dynamicRoutes]
})

export default router
