import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    // path: "*",
    path: '/:catchAll(.*)',
    name: 'NotFound',
    redirect: '/',
  },

  {
    path: '/',
    name: 'HomeView',
    component: () =>
      import(/* webpackChunkName: "homeView" */ '@/views/HomeView.vue'),

    children: [
      {
        path: '/log-in',
        name: 'LogInView',
        component: () =>
          import(/* webpackChunkName: "logInView" */ '@/views/LoginView.vue'),
      },
      {
        path: '/sign-up',
        name: 'SignUpView',
        component: () =>
          import(/* webpackChunkName: "signUpView" */ '@/views/SignUpView.vue'),
      },
      {
        path: '/profile',
        name: 'ProfileView',
        component: () =>
          import(
            /* webpackChunkName: "profileView" */ '@/views/ProfileView.vue'
          ),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFoundView',
    component: () =>
      import(/* webpackChunkName: "notFoundView" */ '@/views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
