import {createRouter, createWebHistory, type RouteRecordRaw} from 'vue-router'
import AppTop from "@/views/AppTop.vue";

const routeSettings: RouteRecordRaw[] = [
  {
    path: "/", // 경로 문자열
    name: "AppTop", // 라우팅명
    component: AppTop, // 표시할 화면용 컴포넌트
  },
  // AppTop 처럼 루트 경로로 표시할 화면 컴포넌트를 제외하고는, 원칙적으로 아래처럼 동적 임포트를 사용
  {
    path: "/member/memberList",
    name: "MemberList",
    component: () => {
      return import((`@/views/member/MemberList.vue`));
    },
  },
  {
    path: "/member/detail/:id",
    name: "MemberDetail",
    component: () => import("@/views/member/MemberDetail.vue"),
    props: (routes) => {
      return {
        id: Number(routes.params.id),
      };
    }
  },
  {
    path: "/member/add",
    name: "MemberAdd",
    component: () => import("@/views/member/MemberAdd.vue")
  },
  {
    path: "/component/coponentList",
    name: "ComponentList",
    component: () => {
      return import((`@/views/component/ComponentList.vue`));
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeSettings,
})

export default router
