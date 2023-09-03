import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@vueuse/head";
import router from "@/router";
import App from "./App.vue";
import "./style.css";
import "vue-skeletor/dist/vue-skeletor.css";

const pinia = createPinia();
const head = createHead();

createApp(App).use(pinia).use(head).use(router).mount("#app");
