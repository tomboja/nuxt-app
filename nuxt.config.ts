/**
 * https://nuxt.com/docs/api/configuration/nuxt-config
 * Private or public tokens that need to be specified after build using environment variables.
 */
const nuxtConfig = defineNuxtConfig({
  devtools: { enabled: true },
  $production: {
    routeRules: {
      "/**": { isr: true },
    },
  },
  $development: {
    routeRules: {
      "/**": { isr: false },
    },
  },
  $env: {},
  $meta: {}, // if authoring layers
  $schema: {},
  $test: {},
  // Environment variables and Private tokens for runtime, exposed to the rest of the app using useRuntimeConfig()
  // Can be overridden by environment variables
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: "123",
    // Keys within public are also exposed client-side
    public: {
      apiBase: "/api/v1",
    },
  },
});

export default nuxtConfig;
