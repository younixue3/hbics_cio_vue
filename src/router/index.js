import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutView from "@/views/LayoutView"
import HomePage from "@/views/page/HomePage";
import FormPage from "@/views/page/FormPage";
import SearchPage from "@/views/page/SearchPage";
import store from '../store/vuex';
import LoginPage from "@/views/page/auth/LoginPage";
import UserPage from "@/views/page/UserPage";
import OutputPage from "@/components/Search/OutputPage";
import ScanQrPage from "@/components/Home/qrcode/ScanQrPage";
import OutputQrPage from "@/components/Home/qrcode/OutputQrPage";
import SettingsPage from "@/views/page/settings/SettingsPage";
import GeolocationPage from "@/views/page/GeolocationPage";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: LayoutView,
    children: [
      {
        path: '',
        component: HomePage,
        meta: { requiresAuth: true },
      },
      {
        path: '/form',
        component: FormPage,
        meta: { requiresAuth: true },
      },
      {
        path: '/approval',
        component: SearchPage,
        meta: { requiresAuth: true },
      },
    ]
  },
  {
    path: '/staff_page/:user_id',
    component: UserPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/output',
    component: OutputPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/output_scan',
    component: OutputQrPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/scan',
    component: ScanQrPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/settings',
    component: SettingsPage,
    meta: { requiresAuth: true }
  },
  {
    path: '/get-location',
    component: GeolocationPage
  },
  {
    path: '/login',
    component: LoginPage,
    meta: { requiresAuth: false },
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'is-active'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.auth.status) {
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  } else {
    if (store.state.auth.status) {
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  }
})

export default router
