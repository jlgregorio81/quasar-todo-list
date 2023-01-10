
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/IndexPage.vue') },
      { path: 'tasks', name: 'tasks', component: () => import('pages/TodoListPage/TodoListPage.vue') },
      { path: 'signup', name: 'signup', component: () => import('pages/NewUserPage/NewUserPage.vue') },
      { path: 'signin', name: 'signin', component: () => import('pages/LoginUserPage/LoginUserPage.vue') },
      { path: 'about', name: 'about', component: () => import('pages/AboutPage.vue') },
      { path: 'stats', name: 'stats', component: () => import('pages/StatsPage.vue') },
      { path: 'profile', name: 'profile', component: () => import('pages/UserProfilePage/UserProfilePage.vue')}

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
