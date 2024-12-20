
import { defineConfig } from 'cypress'

module.exports = {
    projectId: "vntsqg",
    // ...rest of the Cypress project config
  }

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
})