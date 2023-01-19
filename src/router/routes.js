
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: 'nalle', component: () => import('pages/NalleKulaPage.vue') },
      { path: 'kalle', component: () => import('pages/KalleKulaPage.vue') },
      { path: 'users', component: () => import('pages/UsersPage.vue') },
      { path: 'users/:id', component: () => import('pages/UserDetailsPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
