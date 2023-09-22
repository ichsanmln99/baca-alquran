import { ISurah, ISurahNavigator } from "@/api/Surah.interface";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSurah = defineStore("surah", () => {
  const surah = ref<ISurah>();
  const navigation = ref<ISurahNavigator>();
  const search = ref<string>("");

  const activeAudio = ref<{
    isPaused: boolean;
    id: number | null;
    audio: HTMLAudioElement | null;
  }>({
    isPaused: false,
    id: null,
    audio: null,
  });

  function setSurah(data: ISurah) {
    surah.value = data;
  }

  function setNavigation(data: ISurahNavigator) {
    navigation.value = data;
  }

  function setSearch(name: string) {
    search.value = name;
  }

  function setActiveAudio(id: number, audioUrl: string) {
    if (activeAudio.value.id !== id) {
      stopActiveAudio();

      activeAudio.value.id = id;
      activeAudio.value.isPaused = false;
      activeAudio.value.audio = new Audio(audioUrl);
      activeAudio.value.audio.play();

      activeAudio.value.audio.addEventListener(
        "ended",
        () => (activeAudio.value.isPaused = true)
      );
    }
  }

  function unsetActiveAudio() {
    stopActiveAudio();
    activeAudio.value.audio?.removeEventListener("ended", () => ({}));

    activeAudio.value.id = null;
    activeAudio.value.isPaused = false;
    activeAudio.value.audio = null;
  }

  function pauseActiveAudio() {
    activeAudio.value.isPaused = true;
    stopActiveAudio();
  }

  function playActiveAudio() {
    activeAudio.value.isPaused = false;
    activeAudio.value.audio?.play();
  }

  function stopActiveAudio() {
    if (activeAudio.value.audio !== null) {
      activeAudio.value.audio.pause();
    }
  }

  return {
    surah,
    search,
    navigation,
    activeAudio,
    setSurah,
    setSearch,
    setNavigation,
    setActiveAudio,
    pauseActiveAudio,
    playActiveAudio,
    unsetActiveAudio,
  };
});
