import { resolve } from "path";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@hebilicious/authjs-nuxt"],
  nitro: {
    preset: "vercel-edge"
  },
  runtimeConfig: {
    authJs: {
      secret: "temp_secret"
    },
    google: {
      clientId: process.env.NUXT_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NUXT_GOOGLE_CLIENT_SECRET
    },
    public: {
      authJs: {
        baseUrl: "https://nuxt-authjs-google.vercel.app",
        verifyClientOnEveryRequest: true
      }
    }
  },
  alias: {
    cookie: resolve(__dirname, "node_modules/cookie")
  }
})
