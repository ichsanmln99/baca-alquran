<template>
  <div
    v-if="storeSurah.navigation"
    class="flex justify-between pb-4 items-center relative mb-5"
  >
    <div>
      <a
        @click="navigateToSurah(storeSurah.navigation.suratSebelumnya)"
        v-if="storeSurah.navigation.suratSebelumnya"
        class="btn btn-xs btn-link text-neutral no-underline"
      >
        <Icon icon="iconamoon:arrow-left-2-bold" />
        {{ storeSurah.navigation.suratSebelumnya.namaLatin }}
      </a>
    </div>
    <div class="absolute left-1/2 -translate-x-1/2">
      <p v-if="storeSurah.surah" class="text-xs text-neutral/30">
        {{ storeSurah.surah?.nomor }}/114
      </p>
    </div>
    <div>
      <a
        @click="navigateToSurah(storeSurah.navigation.suratSelanjutnya)"
        v-if="storeSurah.navigation.suratSelanjutnya"
        class="btn btn-xs btn-link text-neutral no-underline"
      >
        {{ storeSurah.navigation.suratSelanjutnya.namaLatin }}
        <Icon icon="iconamoon:arrow-right-2-bold" />
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";
import { ISurah } from "@/api/Surah.interface";
import { useSurah } from "@/store/storeSurah";

const router = useRouter();
const storeSurah = useSurah();

function navigateToSurah(surah: ISurah) {
  storeSurah.setSurah(surah);
  localStorage.setItem("recentSurah", surah.nomor.toString());

  router.push({ path: `/surah/${surah.nomor}` });
}
</script>
