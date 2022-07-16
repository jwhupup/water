<template>
  <div class="w-25 <sm:hidden"></div>
  <div
    class="tab-container absolute w-25 h-full transition-all overflow-hidden bg-dark-300 hover:w-60 <sm:(flex h-25 w-full hover:w-full)"
  >
    <div class="flex justify-center w-25 <sm:hidden">
      <Logo />
    </div>
    <router-link
      class="flex items-center w-56 mt-6 <sm:(justify-center mt-0)"
      to="/test"
      @click="selectedTabNumber = 0"
    >
      <div class="flex justify-center w-25">
        <div
          class="flex justify-center items-center w-14 h-14"
          :class="selectedTabNumber === 0 ? 'tab-selected' : ''"
        >
          <Icon class="w-8 h-8" name="shouye" color="#fff" />
        </div>
      </div>
      <p class="tab-home text-white <sm:hidden">我的主页</p>
    </router-link>
    <router-link
      class="flex items-center w-56 mt-6 <sm:(justify-center mt-0)"
      to="/test"
      @click="selectedTabNumber = 1"
    >
      <div class="flex justify-center w-25">
        <div
          class="flex justify-center items-center w-14 h-14"
          :class="selectedTabNumber === 1 ? 'tab-selected' : ''"
        >
          <Icon class="w-8 h-8" name="shouye" color="#fff" />
        </div>
      </div>
      <p class="tab-friend text-white <sm:hidden">关注的人</p>
    </router-link>
  </div>
</template>

<script setup lang="ts">
  import Icon from '@/components/icon/index.vue';
  import Logo from '@/components/logo/index.vue';
  import { ref } from 'vue';

  const selectedTabNumber = ref(0);
</script>

<style scoped>
  .tab-selected {
    @apply relative z-1 rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-blue-500 
    after:(content-[''] absolute -z-1 block w-[calc(100%-2px)] h-[calc(100%-2px)] rounded-2xl bg-dark-500);
  }

  .tab-container:hover .tab-home {
    @apply animate-delay-50;
    animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .tab-container:hover .tab-friend {
    @apply animate-delay-150;
    animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
</style>
