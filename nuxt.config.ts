// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    components: true,
    css: ['~/assets/css/main.css'],
    modules: ['@pinia/nuxt'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
});
