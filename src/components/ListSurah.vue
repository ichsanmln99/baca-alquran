<template>
  <template v-for="surah in listSurah" :key="surah.nomor">
    <CardSurah :surah="surah" />
  </template>
</template>
<script setup lang="ts">
const props = defineProps<{
  search: String;
}>();

import CardSurah from "@/components/CardSurah.vue";
import Surah from "@/api/Surah";
import { ISurah } from "@/api/Surah.interface";
import { ref, computed } from "vue";

const surahData = ref<ISurah[]>([]);

await getAllSurah();

const listSurah = computed(() => {
  return findSurah(surahData.value, props.search);
});

function findSurah(items: ISurah[], text: String) {
  const splitedText = text.toLocaleLowerCase().split(" ");
  return items.filter((item) => {
    return splitedText.every((el) => {
      return item.namaLatin.toLocaleLowerCase().includes(el);
    });
  });
}

function getAllSurah() {
  return Surah.getAll().then((data) => {
    if (data.code === 200) {
      surahData.value = data.data;
    }
  });
}
</script>
