export default defineNuxtConfig({
    css: ['~/assets/styles/components.scss'],
    ssr: false,
    runtimeConfig: {
        public: {
            API_URL: process.env.API_URL || 'http://185.197.34.216/api',
        }
    },
    app: {
        // baseURL: "/test",
        head: {
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200' }
            ],
        },
    },
})
