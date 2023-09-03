<template>
  <BaseNavbar
    class="border-b sticky top-0 backdrop-blur-md bg-base-100/50 z-10 navbar-scroll"
    :class="{ 'nav-hidden': hideNavbar }"
  >
    <div class="gap-4">
      <div class="flex-none">
        <a
          @click="navigateToHome()"
          class="btn btn-circle btn-ghost border border-base-300"
        >
          <Icon width="24" icon="iconamoon:arrow-left-2-bold" />
        </a>
      </div>
      <div class="flex-1">
        <template v-if="storeSurah.surah">
          <h3 class="font-semibold">
            {{ storeSurah.surah.namaLatin }}
            {{ storeSurah.surah.arti ? `(${storeSurah.surah.arti})` : "" }}
          </h3>
          <p class="text-sm opacity-40">
            {{ storeSurah.surah.jumlahAyat }} Ayat
            {{
              storeSurah.surah.tempatTurun
                ? `• ${storeSurah.surah.tempatTurun}`
                : ""
            }}
          </p>
        </template>
        <template v-else>
          <Skeletor width="150" class="mb-1" height="24" pill />
          <Skeletor width="100" height="20" pill />
        </template>
      </div>
    </div>
  </BaseNavbar>
</template>

<script setup lang="ts">
import BaseNavbar from "@/components/BaseNavbar.vue";
import { useRouter } from "vue-router";
import { useSurah } from "@/store/storeSurah";
import { Icon } from "@iconify/vue";
import { useWindowScroll } from "@vueuse/core";
import { Skeletor } from "vue-skeletor";
import { ref, onMounted, onUnmounted } from "vue";

const storeSurah = useSurah();
const router = useRouter();

function navigateToHome() {
  if (window.history.state.back === null || window.history.state.back !== "/") {
    router.push({ path: "/" });
  } else {
    router.back();
  }
}

const hideNavbar = ref(false);
const lastScrollPosition = ref(0);
const scrollOffset = ref(60);

onMounted(() => {
  lastScrollPosition.value = window.pageYOffset;
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});

function onScroll() {
  const { y } = useWindowScroll();

  if (y.value < 0) {
    return;
  }

  if (Math.abs(y.value - lastScrollPosition.value) < scrollOffset.value) {
    return;
  }

  hideNavbar.value = y.value > lastScrollPosition.value;
  lastScrollPosition.value = y.value;
}
</script>
