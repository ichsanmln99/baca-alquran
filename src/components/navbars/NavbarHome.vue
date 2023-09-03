<template>
  <BaseNavbar
    class="border-b gap-4 backdrop-blur-md bg-base-100/50 sticky top-0 z-10"
  >
    <router-link to="/" class="flex-0 text-4xl pr-2 select-none">
      <img
        v-once
        src="/bq-40x40.svg"
        alt=""
        class="h-10 hover:drop-shadow-lg hover:cursor-pointer"
      />
    </router-link>
    <div class="flex-1 gap-2 relative">
      <input
        v-model="search"
        class="input rounded-full w-full bg-transparent"
        type="text"
        placeholder="Cari Surat Apa?"
      />
      <button
        class="btn btn-xs absolute right-2 btn-circle"
        v-if="search"
        @click="clearSearch"
      >
        <Icon width="16" icon="iconamoon:close" />
      </button>
    </div>
  </BaseNavbar>
</template>

<script setup lang="ts">
import BaseNavbar from "@/components/BaseNavbar.vue";
import { Icon } from "@iconify/vue";
import { useSurah } from "@/store/storeSurah";
import { computed } from "vue";

const storeSurah = useSurah();

const search = computed({
  get() {
    return storeSurah.search;
  },
  set(name) {
    storeSurah.setSearch(name);
  },
});

function clearSearch() {
  search.value = "";
}
</script>
