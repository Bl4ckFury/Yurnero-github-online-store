import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/products",
      name: "products",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/feedback",
      name: "feedback",
      component: () => import("../views/Feedback.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
  ],
});

export default router;
