<template>
  <div>
    <Suspense>
      <div class="flex flex-col gap-3">
        <RecentSurah v-show="!storeSurah.search"></RecentSurah>
        <ListSurah :search="storeSurah.search" />
      </div>
      <template #fallback>
        <Skeletor v-for="i in 10" :key="i" width="full" height="76" />
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import ListSurah from "@/components/ListSurah.vue";
import RecentSurah from "@/components/RecentSurah.vue";
import { Skeletor } from "vue-skeletor";
import { useSurah } from "@/store/storeSurah";
import { useHead } from "@vueuse/head";

const storeSurah = useSurah();

useHead({
  title: `Baca Al-Quran`,
  meta: [
    {
      name: `Baca Al-Quran Berbahasa Indonesia`,
      content: `Baca Al-Quran Online Berbahasa Indonesia, gratis tanpa iklan`,
    },
  ],
});
</script>

<style>
.nav-shadow {
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}
</style>
