<template>
    <div>
        <Nav />
        <div class="w-screen flex">
            <div class="mx-auto py-16 px-4 max-w-md w-full">
                <h1 class="font-bold text-4xl mb-8">My account</h1>
                <p class="mb-6">Username: {{ store.user?.username }}</p>
                <button @click="logout()"
                    class="font-bold px-4 py-2 w-full rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors">
                    Log out
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useStore } from '~/stores';
import { useRouter } from 'vue-router';


const store = useStore();
const router = useRouter();

const logout = async () => {
  try {
    await $fetch('https://test-server.skillstruck.com/settings/logout', {
      method: 'GET',
      credentials: 'include',
    });

    store.setUser(null);
  } catch (error) {
    console.error('logout error', error);
  }
  router.push('/login');
}


const fetchUser = async () => {
  try {
    const response = await $fetch('https://test-server.skillstruck.com/settings/user', {
        method: 'GET',
        credentials: 'include',
    });
    store.setUser(response);
  } catch (error) {
    if (error.status === 401) {
      router.push('/login');
    }
    console.error('unknown error', error);
  }
};


onMounted(() => {
  if (!store.user) {
    fetchUser();
  }
});
</script>