<template>
  <div class="bg-dark-400 h-full w-70 <sm:hidden">
    <Header />
    <router-view />
  </div>
</template>

<script setup lang="ts">
  import Header from './Header.vue';
</script>
