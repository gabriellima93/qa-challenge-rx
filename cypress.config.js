const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://your-vercel-url.vercel.app',
    supportFile: false
  }
}) 