<template>
  <div
    v-if="storeSurah.navigation"
    class="flex justify-between pb-4 items-center relative mb-5"
  >
    <div>
      <router-link
        :to="{
          path: `/surah/${storeSurah.navigation.suratSebelumnya.nomor}`,
        }"
        v-if="storeSurah.navigation.suratSebelumnya"
        class="btn btn-xs btn-link text-neutral no-underline"
      >
        <Icon icon="iconamoon:arrow-left-2-bold" />
        {{ storeSurah.navigation.suratSebelumnya.namaLatin }}
      </router-link>
    </div>
    <div class="absolute left-1/2 -translate-x-1/2">
      <p v-if="storeSurah.surah" class="text-xs text-neutral/30">
        {{ storeSurah.surah?.nomor }}/114
      </p>
    </div>
    <div>
      <router-link
        :to="{
          path: `/surah/${storeSurah.navigation.suratSelanjutnya.nomor}`,
        }"
        v-if="storeSurah.navigation.suratSelanjutnya"
        class="btn btn-xs btn-link text-neutral no-underline"
      >
        {{ storeSurah.navigation.suratSelanjutnya.namaLatin }}
        <Icon icon="iconamoon:arrow-right-2-bold" />
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { useSurah } from "@/store/storeSurah";

const storeSurah = useSurah();
</script>
