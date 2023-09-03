import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Surah from "@/views/Surah.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/surah/:id",
    name: "Surah",
    component: Surah,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, _from, savedPosition) {
    // always scroll to top

    if (savedPosition) {
      return savedPosition;
    } else {
      if (to.name === "Surah") {
        return { top: 0 };
      }

      return;
    }
  },
});

export default router;
