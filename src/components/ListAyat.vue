<template>
  <div
    v-if="detailSurah?.nomor !== 1 && detailSurah?.nomor !== 9"
    class="font-arabic text-center text-2xl p-4"
  >
    بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
  </div>
  <div class="flex flex-col divide-y flex-1">
    <!-- <template v-for="ayat in detailSurah?.ayat" :key="ayat.nomor"> -->
    <DynamicScroller
      page-mode
      :items="detailSurah?.ayat"
      :min-item-size="52"
      key-field="nomorAyat"
    >
      <template v-slot="{ item: ayat, index, active }">
        <DynamicScrollerItem
          :item="ayat"
          :active="active"
          :size-dependencies="[
            ayat.teksArab,
            ayat.teksLatin,
            ayat.teksIndonesia,
          ]"
          :data-index="index"
          :data-active="active"
        >
          <CardAyat :ayat="ayat"></CardAyat>
        </DynamicScrollerItem>
      </template>
    </DynamicScroller>
    <!-- </template> -->
  </div>
</template>

<script setup lang="ts">
import Surah from "@/api/Surah";
import { DynamicScroller, DynamicScrollerItem } from "vue-virtual-scroller";
import { IDetailSurah } from "@/api/Surah.interface";
import { useRoute } from "vue-router";
import { ref, computed, onUnmounted } from "vue";
import { useSurah } from "@/store/storeSurah";
import CardAyat from "@/components/CardAyat.vue";
import "vue-virtual-scroller/dist/vue-virtual-scroller.css";

const route = useRoute();
const storeSurah = useSurah();
const detailSurah = ref<IDetailSurah>();

const idSurah = computed(() => route.params.id as string);

await getDetailSurah(idSurah.value);
setSurahToState();

onUnmounted(() => {
  storeSurah.unsetActiveAudio();
});

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
