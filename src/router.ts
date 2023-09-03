import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Surah from "@/views/Surah.vue";

// Navigation
import NavbarSurah from "@/components/navbars/NavbarSurah.vue";
import NavbarHome from "@/components/navbars/NavbarHome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      navigation: NavbarHome,
    },
  },
  {
    path: "/surah/:id",
    name: "Surah",
    components: {
      default: Surah,
      navigation: NavbarSurah,
    },
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
