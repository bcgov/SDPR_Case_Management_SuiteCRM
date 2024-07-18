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
    username: 'gabriel',
    password: 'advocase'
  },
  video: true,
  e2e: {
    baseUrl: "https://advocase-d0d1b5-test.apps.gold.devops.gov.bc.ca/",
    setupNodeEvents(on) {
      on('task', {
        log(message) {
          console.log(message)

          return null
        },
        table(message) {
          console.table(message)

          return null
        }
      })
    },
  }
});
