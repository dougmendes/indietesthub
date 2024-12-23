import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: "vntsqg",
  e2e: {
    setupNodeEvents(on, config) {
      // Dummy usage to satisfy ESLint
      console.log('Setup Node Events initialized');
      console.log(on, config);
      
      // implement node event listeners here
    },
  },
});