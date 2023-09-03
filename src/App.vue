<template>
  <router-view v-slot="{ Component }">
    <keep-alive :exclude="['Surah']">
      <component :is="Component" />
    </keep-alive>
  </router-view>

  <!-- <BaseNavigation /> -->
</template>

<script setup lang="ts">
// import BaseNavigation from "@/components/BaseNavigation.vue";
</script>
