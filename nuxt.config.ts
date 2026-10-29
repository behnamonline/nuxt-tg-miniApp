// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    server: {
      "allowedHosts":['better-walls-cross.loca.lt']
    }
  }
})
