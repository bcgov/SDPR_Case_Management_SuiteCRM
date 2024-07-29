/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
declare namespace Cypress {
  interface Chainable {
    kcLogin(): Chainable<Response<Element>>;
    kcLogout(): Chainable<Response<any>>;
    waitForSpinner(): Chainable<Element>;
  }
}

const base64url = (source: string) => {
  // Encode the input string as base64.
  let encodedSource = btoa(source);

  // Replace any characters that are not URL-safe.
  encodedSource = encodedSource.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");

  return encodedSource;
};

const sha256 = async (plain: string) => {
  // encode as UTF-8.
  const msgBuffer = new TextEncoder().encode(plain);

  // hash the message.
  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);

  // convert ArrayBuffer to Array.
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  // convert bytes to hex string.
  const hashHex = hashArray.map((b) => ("00" + b.toString(16)).slice(-2)).join("");

  return hashHex;
};

function hasSameTopLevelDomain(url1: string, url2: string): boolean {
  const tld1 = extractTopLevelDomain(url1);
  const tld2 = extractTopLevelDomain(url2);

  return tld1 === tld2;
}

function extractTopLevelDomain(url: string): string {
  const domain = new URL(url).hostname;
  const parts = domain.split(".");
  const tld = parts.slice(-2).join(".");

  return tld;
}

Cypress.Commands.add("waitForSpinner", () => {
  cy.get(".comp-loader-overlay").should("exist");
  cy.get(".comp-loader-overlay").should("not.exist");
});

Cypress.Commands.add("kcLogin", () => {
  Cypress.log({ name: "Login to Keycloak" });

  cy.log("Keyloak Login").then(async () => {
    const authBaseUrl = Cypress.env("auth_base_url");
    const realm = Cypress.env("auth_realm");
    const client_id = Cypress.env("auth_client_id");

    const scope = "openid";
    const nonce = "7890";
    const kc_idp_hint = "idir";

    // Generate a code verifier using a random string of 43-128 characters.
    const code_verifier = Cypress._.random(0, 1e10).toString(36) + Cypress._.random(0, 1e10).toString(36);
    const code_challenge = base64url(await sha256(code_verifier));

    // Make the initial request to the authentication endpoint.
    cy.request({
      method: "GET",
      url: `${authBaseUrl}/auth/realms/${kc_idp_hint}/protocol/openid-connect/auth?scope=${scope}&state=${code_challenge}.${client_id}&response_type=code&client_id=${realm}-realm&redirect_uri=${authBaseUrl}/auth/realms/${realm}/broker/${kc_idp_hint}/endpoint&nonce=${nonce}`,
      followRedirect: false, // Don't follow the redirect automatically.
    }).then((response) => {
      // Extract the location header from the response to get the redirect URL.
      const redirectUrls = response.headers.location;
      const url = Array.isArray(redirectUrls) ? redirectUrls[0] : redirectUrls;

      // Visit redirect URL.
      const credentials = {
        username: Cypress.env("keycloak_user"),
        password: Cypress.env("keycloak_password"),
        url: url,
      };

      // depending on if we're running the cypress tests locally or not, we may or may not ge a CORS error.
      // If the keycloak login URL is the same as the application URL, then simply visit the URL;
      // otherwise, will need to use cy.origin to avoid any CORS errors.
      if (hasSameTopLevelDomain(Cypress.env("keycloak_login_url"), Cypress.config().baseUrl)) {
        cy.visit(url);
        // Log in the user and obtain an authorization code.
        cy.get('[name="user"]').click();
        cy.get('[name="user"]').type(credentials.username);
        cy.get('[name="password"]').click();
        cy.get('[name="password"]').type(credentials.password, { log: false });
        cy.get('[name="btnSubmit"]').click();
      } else {
        // different origin, so handle CORS errors
        cy.origin(Cypress.env("keycloak_login_url"), { args: credentials }, ({ username, password, url }) => {
          cy.visit(url);
          // Log in the user and obtain an authorization code.
          cy.get('[name="user"]').click();
          cy.get('[name="user"]').type(username);
          cy.get('[name="password"]').click();
          cy.get('[name="password"]').type(password, { log: false });
          cy.get('[name="btnSubmit"]').click();
        }).then(() => {
          cy.waitForSpinner();
        });
      }
    });
  });
});

Cypress.Commands.add("kcLogout", () => {
  Cypress.log({ name: "Logout" });
  const authBaseUrl = Cypress.env("auth_base_url");
  const realm = Cypress.env("auth_realm");
  cy.request({
    // change `https://advocase-d0d1b5-test.apps.gold.devops.gov.bc.ca` to an environment variable
    url: 'https://advocase-d0d1b5-test.apps.gold.devops.gov.bc.ca/saml/logout',
  });
  cy.visit(Cypress.config().baseUrl);
  cy.on("uncaught:exception", (e) => {
    if (e.message.includes("Unexpected")) {
      // we expected this error, so let's ignore it
      // and let the test continue
      return false;
    }
  });
});

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }