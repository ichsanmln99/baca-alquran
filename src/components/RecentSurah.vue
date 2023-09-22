<template>
  <div :key="id" v-if="recentSurah">
    <span class="text-sm text-neutral/50">Terakhir dibaca</span>
    <div class="my-3">
      <CardSurah :surah="recentSurah" />
    </div>
    <div class="border-b"></div>
  </div>
</template>

<script setup lang="ts">
import Surah from "@/api/Surah";
import CardSurah from "@/components/CardSurah.vue";
import { ISurah } from "@/api/Surah.interface";
import { useStorage } from "@vueuse/core";
import { ref } from "vue";

const recentSurah = ref<ISurah>();
const id = useStorage("recentSurah", "", localStorage);

if (id.value) {
  await getDetailSurah(id.value);
}

function getDetailSurah(id: string) {
  return Surah.get(id).then((data) => {
    if (data.code === 200) {
      const detailSurah = data.data;

      recentSurah.value = {
        nomor: detailSurah.nomor,
        nama: detailSurah.nama,
        namaLatin: detailSurah.namaLatin,
        jumlahAyat: detailSurah.jumlahAyat,
        tempatTurun: detailSurah.tempatTurun,
        arti: detailSurah.arti,
        deskripsi: detailSurah.deskripsi,
        audioFull: detailSurah.audioFull,
      };
    }
  });
}
</script>
