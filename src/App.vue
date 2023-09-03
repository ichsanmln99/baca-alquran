<template>
  <BaseLayout>
    <template #navbar>
      <router-view name="navigation"></router-view>
    </template>

    <router-view v-slot="{ Component }">
      <!-- <keep-alive :exclude="['Surah']"> -->
      <component :is="Component" />
      <!-- </keep-alive> -->
    </router-view>
  </BaseLayout>

  <!-- <BaseNavigation /> -->
</template>

<script setup lang="ts">
import BaseLayout from "@/components/BaseLayout.vue";
// import BaseNavigation from "@/components/BaseNavigation.vue";
</script>
