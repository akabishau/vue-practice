<template>
  <transition name="modal">
    <div v-if="isOpen" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <h3  class="text-blue-600 text-xl font-bold">Settings</h3>
        </div>

        <div class="modal-body">
          <label class="flex items-center space-x-2">
            <span>Allow Paste in Chat</span>
            <input type="checkbox" v-model="store.user.settings.enablePaste" class="h-4 w-4" />
          </label>
        </div>

        <div class="modal-footer">
          <button @click="saveSettings"
            class="font-bold px-3 py-1 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors disabled:opacity-50">
            Save
          </button>
          <button @click="$emit('close')"
            class="font-bold px-3 py-1 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
            Close
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">

import { useStore} from '~/stores/index';
import { saveUserSettings } from '~/services/api';

const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(['close']);
const store = useStore();


async function saveSettings() {
  try {
    const updatedUser = await saveUserSettings(store.user.settings);
    store.setUser(updatedUser);
    emit('close');
  } catch (error) {
    console.error('Error saving settings:', error);
  }
}
</script>


<!-- https://vuejs.org/examples/#modal -->
<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 400px;
  margin: auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-body {
  margin: 10px 0;
  padding: 20px 0;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.modal-enter-active, .modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>