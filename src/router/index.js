import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutView from "@/views/LayoutView"
import HomePage from "@/views/page/HomePage";
import FormPage from "@/views/page/FormPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutView,
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
        component: HomePage
      }
    ]
  },
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'is-active'
})

export default router
