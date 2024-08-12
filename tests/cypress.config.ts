import { defineConfig } from "cypress";
import dotenv from 'dotenv'
dotenv.config()

export default defineConfig({
  env: {
    auth_base_url: process.env.KEYCLOAK_AUTH_URL as string,
    auth_realm: process.env.KEYCLOAK_REALM as string,
    auth_client_id: process.env.KEYCLOAK_CLIENT_ID as string,
    keycloak_login_url: process.env.KEYCLOAK_AUTH_URL as string,
    keycloak_user: process.env.KEYCLOAK_ADMIN_USER as string,
    keycloak_password: process.env.KEYCLOAK_ADMIN_USER_PASSWORD as string,
    base_url: process.env.BASE_URL as string
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
    baseUrl: process.env.BASE_URL as string,
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
