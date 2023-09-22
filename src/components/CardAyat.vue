<template>
  <div class="px-2 py-4 flex flex-col gap-4">
    <div class="flex justify-between">
      <div
        class="bg-base-300 mask mask-circle w-8 h-8 text-sm flex items-center justify-center"
      >
        <span>{{ ayat.nomorAyat }}</span>
      </div>
      <div class="flex gap-1 items-center" v-if="isAudioActive">
        <div>
          <template v-if="isPaused">
            <button
              @click="storeSurah.playActiveAudio"
              class="btn btn-sm btn-circle"
            >
              <Icon icon="iconamoon:player-play-fill"></Icon>
            </button>
          </template>
          <template v-if="isPlayed">
            <button
              @click="storeSurah.pauseActiveAudio"
              class="btn btn-sm btn-circle btn-primary"
            >
              <Icon icon="iconamoon:player-pause-fill"></Icon>
            </button>
          </template>
        </div>
        <button
          @click="storeSurah.unsetActiveAudio"
          class="btn btn-sm btn-circle"
        >
          <Icon icon="iconamoon:close-bold"></Icon>
        </button>
      </div>
    </div>
    <div class="text-right">
      <div
        @click="storeSurah.setActiveAudio(ayat.nomorAyat, ayat.audio['05'])"
        class="font-arabic leading-loose text-4xl my-6 hover:text-primary cursor-pointer"
      >
        {{ ayat.teksArab }}
      </div>
    </div>
    <div class="text-sm space-y-2">
      <p class="opacity-40">
        {{ ayat.teksLatin }}
      </p>
      <p>
        {{ ayat.teksIndonesia }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSurah } from "@/store/storeSurah";
import { IAyat } from "@/api/Surah.interface";
import { Icon } from "@iconify/vue";
import { computed } from "vue";
interface Props {
  ayat: IAyat;
}

const props = defineProps<Props>();
const storeSurah = useSurah();

const isAudioActive = computed(
  () => storeSurah.activeAudio.id === props.ayat.nomorAyat
);

const isPlayed = computed(
  () => !storeSurah.activeAudio.isPaused && isAudioActive.value
);

const isPaused = computed(
  () => storeSurah.activeAudio.isPaused && isAudioActive.value
);
</script>
