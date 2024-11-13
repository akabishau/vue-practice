<template>
  <button
    :class="['font-bold px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors']"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">

const emit = defineEmits<{
  (e: 'click'): void
}>();

function handleClick() {
  emit('click');
}
</script>