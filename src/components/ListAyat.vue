<template>
  <div
    v-if="detailSurah?.nomor !== 1 && detailSurah?.nomor !== 9"
    class="font-arabic text-center text-2xl p-4 hover:text-primary"
  >
    بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
  </div>
  <div class="gap-4 flex flex-col divide-y min-h-screen">
    <template v-for="ayat in detailSurah?.ayat" :key="ayat.nomor">
      <CardAyat :ayat="ayat"></CardAyat>
    </template>
  </div>
</template>

<script setup lang="ts">
import Surah from "@/api/Surah";
import { IDetailSurah } from "@/api/Surah.interface";
import { useRoute } from "vue-router";
import { ref, computed } from "vue";
import { useSurah } from "@/store/storeSurah";
import CardAyat from "@/components/CardAyat.vue";

const route = useRoute();
const storeSurah = useSurah();
const detailSurah = ref<IDetailSurah>();

const idSurah = computed(() => route.params.id as string);

await getDetailSurah(idSurah.value);
setSurahToState();

function setSurahToState() {
  if (detailSurah.value) {
    const { ayat, suratSebelumnya, suratSelanjutnya, ...surah } =
      detailSurah.value;

    storeSurah.setSurah(surah);
    storeSurah.setNavigation({ suratSebelumnya, suratSelanjutnya });
  }
}

function getDetailSurah(id: string) {
  return Surah.get(id).then((data) => {
    if (data.code === 200) {
      detailSurah.value = data.data;
    }
  });
}
</script>
