export default defineNuxtConfig({
    css: ['~/assets/styles/components.scss'],
    ssr: false,
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL || 'http://localhost:5000/api',
        }
    },
    app: {
        "baseURL": "/test",
    },
})
