import { createRouter, createWebHistory } from 'vue-router'
import useAuthStore from '@/app/modules/auth/store';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/index.vue'),
      beforeEnter: async () => {
        const authStore = useAuthStore()
        if (!(await authStore.isAuth)) {
          return { name: 'login' };
        }
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/login.vue'),
      beforeEnter: async () => {
          const authStore = useAuthStore();
          if (await authStore.isAuth) {
            console.log('go to home');
            return {name: 'home'};
          }
      }
    }
  ],
})

export default router
