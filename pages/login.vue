<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-50">
    <div class="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
      <h1 class="text-3xl font-bold text-center text-gray-800">Login</h1>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700">Username</label>
          <input
            v-model="form.username"
            type="email"
            placeholder="Your email"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            required
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700">Password</label>
          <input
            v-model="form.password"
            type="password"
            placeholder="Your password"
            class="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"
            required
          />
        </div>

        <button
          type="submit"
          class="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
        <p v-if="errorMessage" class="mt-4 text-sm font-medium text-red-600 bg-red-100 p-3 rounded-lg">{{ errorMessage }}</p>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">

import { User, LoginCredentials } from '~/types';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '~/stores/index';
import { loginUser } from '~/services/api';


const errorMessage = ref('');
const form = ref<LoginCredentials>({
  username: '',
  password: '',
});


const router = useRouter();
const store = useStore();


const handleLogin = async () => {
  try {
    const user = await loginUser(form.value);
    store.setUser(user);
    router.push('/');
  } catch (err) {
    console.error('Error during login:', err);
    errorMessage.value = 'Something went wrong. Please verify the credentials and try again.';
  }
}

</script>