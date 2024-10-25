<template>
    <div>
        <Nav />
        <div class="max-w-2xl w-full mx-auto py-10 px-4">
            <h1 class="font-bold text-4xl mb-6">New chat</h1>
            <textarea v-model="message" class="w-full min-h-44 rounded border resize-none p-2"
                placeholder="Enter your chat here">
            </textarea>
            <button @click="sendChat()"
                class="font-bold w-full px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-colors rounded-b-lg">
                Send chat
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">

// TODO: prevent the user from pasting into the textarea if the enablePaste setting is disabled

const message = ref('');

function sendChat() {
    console.log('SENDING CHAT');
    message.value = '';
    // don't worry about changing the functionality for "sendChat"
}
</script>