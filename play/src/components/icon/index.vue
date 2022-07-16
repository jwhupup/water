<template>
  <svg :width="width" :height="height" :fill="color" aria-hidden="true">
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script setup lang="ts">
  interface IconProps {
    name: string;
    width?: string;
    height?: string;
    color?: string;
  }
  withDefaults(defineProps<IconProps>(), {
    width: '30px',
    height: '30px',
    color: 'currentColor',
  });
</script>
