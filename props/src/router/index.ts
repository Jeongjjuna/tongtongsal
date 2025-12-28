import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import Home from "@/view/Home.vue";

const routeSettings: RouteRecordRaw[] = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSettings,
})

export default router
