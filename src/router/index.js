import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // 重定向到home
    redirect: "/home",
    component: () => import("@/view/layout"),
    children: [
      {
        path: 'home', component: () => import("@/view/home"),
        meta: { title: "首页" }
      },
      {
        path: 'user-system',
        component: () => import("@/view/user"),
        meta: {
          title: "用户管理"
        }
      },
      {
        path: 'goods-system',
        component: () => import("@/view/goods"),
        meta: {
          title: "商品管理"
        }
      },
      {
        path: 'enlarge',
        component: () => import("@/view/enlarge"),
        meta: {
          title: "商品放大组件"
        }
      },
      {
        path: 'shopcart',
        component: () => import("@/view/shopcart"),
        meta: {
          title: "购物车组件",
          name: "shop"
        }
      }
    ],

  },


]


const router = new VueRouter({
  routes
})


export default router