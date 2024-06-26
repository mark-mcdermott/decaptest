// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/scss/app.scss'],
  modules: ["@nuxt/content"],
  vue: {  
    compilerOptions: {
      isCustomElement: (tag) => ['PostsList', 'LatestPost'].includes(tag),
    },
  }
})