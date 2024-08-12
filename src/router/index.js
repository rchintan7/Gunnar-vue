import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import User from "@/components/User.vue";
import Albums from "@/components/Albums.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user",
    name: "User",
    component: User,
  },
  {
    path: "/albums",
    name: "Albums",
    component: Albums,
  },
  // other routes
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
