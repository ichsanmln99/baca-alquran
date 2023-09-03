<template>
  <Suspense :key="route.fullPath">
    <div>
      <SurahNavigation></SurahNavigation>
      <ListAyat></ListAyat>
    </div>
    <template #fallback>
      <div class="flex">
        <span class="mx-auto mt-10 loading loading-spinner loading-lg"></span>
      </div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import ListAyat from "@/components/ListAyat.vue";
import { useRoute } from "vue-router";
import { useSurah } from "@/store/storeSurah";
import { defineAsyncComponent } from "vue";
import { useHead } from "@vueuse/head";

const SurahNavigation = defineAsyncComponent(
  () => import("@/components/SurahNavigation.vue")
);

const storeSurah = useSurah();
const route = useRoute();

useHead({
  title: `Surah ${storeSurah.surah?.namaLatin} | Baca Al-Quran`,
  meta: [
    {
      name: `Surah ${storeSurah.surah?.namaLatin} (${storeSurah.surah?.arti})`,
      content: `Baca ${storeSurah.surah?.namaLatin} di baca-alquran.com`,
    },
  ],
});
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
