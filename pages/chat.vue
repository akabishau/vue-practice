<template>
    <div>
        <Nav />
        <div class="max-w-2xl w-full mx-auto py-10 px-4">
            <h1 class="font-bold text-4xl mb-6">New chat</h1>
            <textarea v-model="message" class="w-full min-h-44 rounded border resize-none p-2"
                :placeholder="placeholderText"
                @paste="handlePaste"> <!-- js event(paste) is passed automatically as first arg -->
            </textarea>
            <button @click="sendChat()"
                class="font-bold w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-b-lg">
                Send chat
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useStore } from '~/stores/index';

const message = ref('');
const store = useStore();


// dynamic placeholder text based on user settings
const placeholderText = computed(() =>
  store.user?.settings.enablePaste === false
    ? 'Ask here you question 💬 (No pasting, please 🙅‍♂️)'
    : 'Chat with us! 💬'
);

function handlePaste(event: ClipboardEvent) {

  // Check if paste is disabled in user settings
  if (store.user?.settings.enablePaste === false) {
    event.preventDefault();
  }
}

function sendChat() {
  console.log('SENDING CHAT');
  message.value = '';  // Clear the chat message after sending
}
</script>