<template>
  <div class="flex <sm:flex-col-reverse justify-between h-100vh">
    <Tab />
    <Personal />
    <Stage />
    <Community />
  </div>
</template>

<script setup lang="ts">
  import Tab from '@/components/tab/index.vue';
  import Personal from '@/components/main/personal/index.vue';
  import Stage from '@/components/main/stage/index.vue';
  import Community from '@/components/main/community/index.vue';
</script>
