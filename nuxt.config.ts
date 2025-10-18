// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/main.css'
  ],
  plugins: [
    { src: '~/plugins/bootstrap.client.ts', mode: 'client' }
  ],
  modules:[
    '@pinia/nuxt',
  ],
  devServer: {
    host: '0.0.0.0'
  },
})
