import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    auth_base_url: process.env.KEYCLOAK_AUTH_URL,
    auth_realm: process.env.KEYCLOAK_REALM,
    auth_client_id: process.env.KEYCLOAK_CLIENT_ID,
    keycloak_login_url: process.env.KEYCLOAK_AUTH_URL,
    keycloak_user: process.env.KEYCLOAK_USER,
    keycloak_password: process.env.KEYCLOAK_PASSWORD,
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
    baseUrl: process.env.BASE_URL,
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
