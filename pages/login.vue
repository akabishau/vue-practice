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

                <p v-if="errorMessage">{{ errorMessage }}</p>

            </div>
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