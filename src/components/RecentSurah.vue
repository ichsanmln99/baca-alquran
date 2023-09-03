<template>
  <template :key="id" v-if="recentSurah">
    <span class="text-sm text-neutral/50">Terakhir dibaca</span>
    <CardSurah :surah="recentSurah" />
    <div class="border-b"></div>
  </template>
</template>

<script setup lang="ts">
import Surah from "@/api/Surah";
import CardSurah from "@/components/CardSurah.vue";
import { ISurah } from "@/api/Surah.interface";
import { useStorage } from "@vueuse/core";
import { onMounted, ref } from "vue";

const recentSurah = ref<ISurah>();
const id = useStorage("recentSurah", "", localStorage);

onMounted(() => {
  getDetailSurah(id.value);
});

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
