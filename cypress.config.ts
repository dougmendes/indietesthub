import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: "vntsqg",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
