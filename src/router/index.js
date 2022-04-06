import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutView from "@/views/LayoutView"
import HomePage from "@/views/page/HomePage";
import FormPage from "@/views/page/FormPage";
import SearchPage from "@/views/page/SearchPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutView,
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: '/form',
        component: FormPage
      },
      {
        path: '/approval',
        component: SearchPage
      }
    ]
  },
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active'
})

router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router
