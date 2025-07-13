import type { Component } from 'vue'
import type { RouteRecordRaw } from 'vue-router'

interface RouteStyle {
  path: string
  name?: string
  component: Component
  children?: RouteRecordRaw[]
  meta?: {
    title: string
  }
}

export const routes: RouteStyle[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
    meta: {
      title: 'Página Inicial',
    },
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('../views/PostsView.vue'),
    meta: {
      title: 'Listagem de Posts',
    },
  },
  {
    path: '/users',
    name: 'users',
    component: () => import('../views/UsersView.vue'),
    meta: {
      title: 'Listagem de Usuários',
    },
  },
]
