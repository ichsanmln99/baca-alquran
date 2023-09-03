import { ISurah, ISurahNavigator } from "@/api/Surah.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSurah = defineStore("surah", () => {
  const surah = ref<ISurah>();
  const navigation = ref<ISurahNavigator>();

  function setSurah(data: ISurah) {
    surah.value = data;
  }

  function setNavigation(data: ISurahNavigator) {
    navigation.value = data;
  }

  return { surah, navigation, setSurah, setNavigation };
});
