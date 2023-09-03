<template>
  <a @click="navigateToSurah(surah)">
    <div
      class="p-4 bg-base-200 rounded-xl flex gap-4 items-center hover:bg-base-300 cursor-pointer group"
    >
      <div
        class="bg-base-300 mask mask-circle w-8 h-8 text-sm flex items-center justify-center"
      >
        <span>{{ surah?.nomor }}</span>
      </div>
      <div class="flex-1">
        <h3>{{ surah?.namaLatin }}</h3>
        <p class="text-sm opacity-40">
          {{ surah?.arti }} • {{ surah?.jumlahAyat }} Ayat
        </p>
      </div>
      <div class="text-2xl font-arabic">{{ surah?.nama }}</div>
    </div>
  </a>
</template>

<script setup lang="ts">
interface Props {
  surah: ISurah;
}

defineProps<Props>();
import { useRouter } from "vue-router";
import { useSurah } from "@/store/storeSurah";
import { ISurah } from "@/api/Surah.interface";

const router = useRouter();
const storeSurah = useSurah();

function navigateToSurah(surah: ISurah) {
  storeSurah.setSurah(surah);
  localStorage.setItem("recentSurah", surah.nomor.toString());

  router.push({ path: `/surah/${surah.nomor}` });
}
</script>
