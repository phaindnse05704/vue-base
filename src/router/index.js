import Vue from "vue";
import VueRouter from "vue-router";
import RootLayout from "@/layout/Root.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/cms",
    name: "Home",
    component: RootLayout
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
