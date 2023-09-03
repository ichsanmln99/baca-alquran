<template>
  <BaseLayout>
    <template #navbar>
      <BaseNavbar
        class="border-b sticky top-0 backdrop-blur-md bg-base-100/50 z-10 navbar-scroll"
        :class="{ 'nav-hidden': hideNavbar }"
      >
        <div class="gap-4">
          <div class="flex-none">
            <a
              @click="navigateToHome()"
              class="btn btn-circle btn-ghost border border-base-300"
            >
              <Icon width="24" icon="iconamoon:arrow-left-2-bold" />
            </a>
          </div>
          <div class="flex-1">
            <template v-if="storeSurah.surah">
              <h3 class="font-semibold">
                {{ storeSurah.surah.namaLatin }} ({{ storeSurah.surah.arti }})
              </h3>
              <p class="text-sm opacity-40">
                {{ storeSurah.surah.jumlahAyat }} Ayat •
                {{ storeSurah.surah.tempatTurun }}
              </p>
            </template>
            <template v-else>
              <Skeletor width="150" class="mb-1" height="24" pill />
              <Skeletor width="100" height="20" pill />
            </template>
          </div>
        </div>
      </BaseNavbar>
    </template>

    <Suspense>
      <div>
        <SurahNavigation></SurahNavigation>
        <ListAyat :key="route.fullPath"></ListAyat>
      </div>
      <template #fallback>
        <div class="flex">
          <span class="mx-auto mt-10 loading loading-spinner loading-lg"></span>
        </div>
      </template>
    </Suspense>
  </BaseLayout>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import BaseLayout from "@/components/BaseLayout.vue";
import BaseNavbar from "@/components/BaseNavbar.vue";
import ListAyat from "@/components/ListAyat.vue";
import { Skeletor } from "vue-skeletor";
import { useRouter, useRoute } from "vue-router";
import { useSurah } from "@/store/storeSurah";
import { ref, onMounted, onUnmounted, defineAsyncComponent } from "vue";
import { useWindowScroll } from "@vueuse/core";

const SurahNavigation = defineAsyncComponent(
  () => import("@/components/SurahNavigation.vue")
);

const storeSurah = useSurah();
const router = useRouter();
const route = useRoute();

const hideNavbar = ref(false);
const lastScrollPosition = ref(0);
const scrollOffset = ref(60);

onMounted(() => {
  lastScrollPosition.value = window.pageYOffset;
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

function navigateToHome() {
  if (window.history.state.back === null || window.history.state.back !== "/") {
    router.push({ path: "/" });
  } else {
    router.back();
  }
}

function onScroll() {
  const { y } = useWindowScroll();

  if (y.value < 0) {
    return;
  }

  if (Math.abs(y.value - lastScrollPosition.value) < scrollOffset.value) {
    return;
  }

  hideNavbar.value = y.value > lastScrollPosition.value;
  lastScrollPosition.value = y.value;
}
</script>

<style>
.navbar-scroll {
  transform: translateY(0);
  transition: transform 100ms ease-in-out;
}

.navbar-scroll.nav-hidden {
  transform: translateY(-100%);
}
</style>
