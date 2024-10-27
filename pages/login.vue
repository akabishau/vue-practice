<template>
    <div>
        <div class="w-screen flex">
            <div class="mx-auto py-16 px-4 max-w-md w-full">
                <h1 class="font-bold text-4xl mb-8">Login</h1>

                <!-- TODO: add labels and styles -->
                <form @submit.prevent="handleLogin">
                  <div>
                    <input v-model="form.username" type="text" placeholder="Your email" class="border" required>
                  </div>
                  <div>
                    <input v-model="form.password" type="text" placeholder="Your password" class="border" required>
                  </div>
                  <div>
                    <button type="submit">Login</button>
                  </div>


                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from '~/stores/index';

// TODO: does it has to be optional?
type LoginForm = {
    username?: string,
    password?: string,
};

const form = ref<LoginForm>({});

const router = useRouter();
const store = useStore();


const handleLogin = async () => {
  try {
    const response = await $fetch('https://test-server.skillstruck.com/settings/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form.value),
      credentials: 'include',  // include cookies in the request
    });

    store.setUser(response);
    router.push('/');
    // router.back(); consider redirecting to the previous page

  } catch (err) {
    // TODO: improve error handling
    console.error('Error during login:', err);
    errorMessage.value = 'An unexpected error occurred.';
  }

};

</script>