<template>
    <div>
        <Nav />
        <div class="h-[calc(100vh-56px)] w-screen flex">
            <div class="m-auto pb-44 px-4">
                <h1 class="text-7xl font-bold mb-12">Settings Project</h1>
                <NuxtLink to="/chat"
                    class="px-4 py-2 font-bold rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors flex">
                    <svg class="h-6 w-6" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path
                            d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
                    </svg>
                    <span class="pl-3">
                        New chat
                    </span>
                </NuxtLink>
                <p class="mt-4">Not logged in?
                    <NuxtLink to="/login" class="text-blue-600 hover:text-blue-700 hover:underline">Login</NuxtLink>
                </p>
            </div>
        </div>
    </div>
</template>