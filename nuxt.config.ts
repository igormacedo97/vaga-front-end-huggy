// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // alias: {
  //   "@": resolve{__dirname, "/"},
  // },
  css: ["~/assets/main.scss",
  '@/assets/global-variables.scss',
  ],

  runtimeConfig: {
    NUXT_HUGGY_SECRET_ID: process.env.NUXT_HUGGY_SECRET_ID,
    NUXT_HUGGY_CLIENT_ID: process.env.NUXT_PUBLIC_HUGGY_CLIENT_ID,
    NUXT_HUGGY_REDIRECT_URL: process.env.NUXT_PUBLIC_HUGGY_REDIRECT_URL,
    
    public: {
      NUXT_PUBLIC_HUGGY_CLIENT_ID: process.env.NUXT_PUBLIC_HUGGY_CLIENT_ID,
      NUXT_PUBLIC_HUGGY_REDIRECT_URL: process.env.NUXT_PUBLIC_HUGGY_REDIRECT_URL,
    }
  },
})
