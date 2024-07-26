import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    auth_base_url: "https://test.loginproxy.gov.bc.ca",
    auth_realm: "standard",
    auth_client_id: "advocase-5545",
    keycloak_login_url: "https://test.loginproxy.gov.bc.ca",
    keycloak_user: "JGCARVAL",
    keycloak_password: "EPV2hex@kyu6emq9dny",

    // auth_base_url: process.env.REACT_APP_KEYCLOAK_URL,
    // auth_realm: process.env.REACT_APP_KEYCLOAK_REALM,
    // auth_client_id: process.env.REACT_APP_KEYCLOAK_CLIENT_ID,
    // keycloak_user: process.env.CYPRESS_KEYCLOAK_USER,
    // keycloak_password: process.env.CYPRESS_KEYCLOAK_PASSWORD,
    // keycloak_login_url: "https://test.loginproxy.gov.bc.ca"
  },
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
  chromeWebSecurity: false,
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
