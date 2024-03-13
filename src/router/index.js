import { createRouter, createWebHashHistory } from "vue-router"
export default createRouter({

  history: createWebHashHistory(),

  routes: [
    {
      path: '/user',
      component: () => import('../components/UserManagementComponent.vue')
    },
    {
      path: '/index',
      component: () => import('../components/Index.vue')
    },
    {
      path: '/test',
      component: () => import('../components/Test02.vue')
    },
    {
      path: '/Parent',
      component: () => import('../components/ParentComponent.vue')
    },
    {
      path: '/box',
      component: () => import('../components/BoxModule.vue')
    },
  ],
})
