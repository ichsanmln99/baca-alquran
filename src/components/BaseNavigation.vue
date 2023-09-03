<template>
  <div class="btm-nav btm-nav-sm nav-shadow max-w-lg mx-auto">
    <button>
      <Icon width="20" icon="iconamoon:home-duotone" class="text-primary" />
      <!-- <span class="btm-nav-label">Home</span> -->
    </button>
    <button class="text-neutral/50">
      <Icon width="20" icon="iconamoon:star-bold" />
      <!-- <span class="btm-nav-label">Favorite</span> -->
    </button>
    <button class="text-neutral/50">
      <Icon width="20" icon="iconamoon:settings-bold" />
      <!-- <span class="btm-nav-label">Setting</span> -->
    </button>
  </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>
