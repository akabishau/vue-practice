<template>
  <transition name="fade">
    <div v-if="isOpen">
      <div class="border">
        <div>
          <h3>Settings</h3>
        </div>
        <div class="border p-2 mb-4">
          <!-- Direct binding to store using v-model -->
          <label>
            Enable Paste
            </label>
            <input type="checkbox" v-model="store.user.settings.enablePaste" />

        </div>
        <div class="text-right">
          <button @click="saveSettings" class="border">
            Save
          </button>
          <button @click="$emit('close')" class="border">
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
    const updatedUser = await saveUserSettings({
      enablePaste: store.user.settings.enablePaste
    });

    store.setUser(updatedUser);
    console.log('Settings saved:', updatedUser);
    emit('close');
  } catch (error) {
    console.error('Error saving settings:', error);
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>