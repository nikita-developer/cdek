export default defineNuxtConfig({
    css: ['~/assets/styles/components.scss'],
    ssr: false,
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL || 'http://185.197.34.216/api',
        }
    },
    app: {
        // "baseURL": "/test",
    },
})
