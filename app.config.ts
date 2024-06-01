/**
 * Exposes public variables that can be determined at build time. 
 * Contrary to runtimeConfig, these variables can not be overridden by environment variables.
 * These configrations are exposed to the rest of the app using useAppConfig()
 * 
 * Public tokens that are determined at build time, website configuration such as theme variant, 
 * title and any project config that are not sensitive
 */
const appConfig = defineAppConfig({

  title: 'My App',
  theme: {
    dark: true,
    colors: {
      primary: '#333',
    },
  
  }
})

export default appConfig;