<template>
  <transition name="fade">
    <div v-if="toast" :class="toastClass" class="fixed bottom-4 right-4 px-4 py-2 rounded shadow-lg text-white">
      {{ toast.message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import useToast from '~/composables/useToast';

const { toast } = useToast();

const toastClass = computed(() =>
  toast.value?.type === 'success' ? 'bg-green-500' : 'bg-red-500'
);
</script>


<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
