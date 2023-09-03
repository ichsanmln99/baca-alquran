<template>
  <div class="px-2 py-4 flex flex-col gap-4">
    <div
      class="bg-base-300 mask mask-circle w-8 h-8 text-sm flex items-center justify-center"
    >
      <span>{{ ayat.nomorAyat }}</span>
    </div>
    <div class="text-right">
      <div class="font-arabic leading-loose text-3xl my-6 hover:text-primary">
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
import { IAyat } from "@/api/Surah.interface";
interface Props {
  ayat: IAyat;
}

defineProps<Props>();
</script>
