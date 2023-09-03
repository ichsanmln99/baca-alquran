<template>
  <BaseLayout>
    <template #navbar>
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
    <div class="flex flex-col gap-3">
      <Suspense>
        <ListSurah :search="search" />
        <template #fallback>
          <Skeletor v-for="i in 10" :key="i" width="full" height="76" />
        </template>
      </Suspense>
    </div>
  </BaseLayout>
</template>

<script setup lang="ts">
import BaseLayout from "@/components/BaseLayout.vue";
import BaseNavbar from "@/components/BaseNavbar.vue";
import ListSurah from "@/components/ListSurah.vue";
import { Skeletor } from "vue-skeletor";
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const search = ref<String>("");

function clearSearch() {
  search.value = "";
}
</script>

<style>
.nav-shadow {
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
}
</style>
