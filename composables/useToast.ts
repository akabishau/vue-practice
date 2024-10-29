import { ref } from 'vue';
import type { Toast } from '~/types';
import { toastMessages } from '~/constants/messages';

const duration = 2000;

const toast = ref<Toast | null>(null);

function showToast(key: string) {

  // const message = toastMessages[key];
  toast.value = toastMessages[key]

  setTimeout(() => {
    toast.value = null;
  }, duration);
}

// export reactive toast and the way to update it's state
export default function useToast() {
  return { toast, showToast };
}