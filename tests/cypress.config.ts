import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
  chromeWebSecurity: false,
  env: {
    scrm_UAT: "https://advocase-d0d1b5-test.apps.gold.devops.gov.bc.ca"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
