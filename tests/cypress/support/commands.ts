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
    kcRedirect(): Chainable<Response<Element>>;
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

Cypress.Commands.add("kcRedirect", () => {
  cy.visit(`${Cypress.env('base_url')}#/home`)
})

Cypress.Commands.add("kcLogin", () => {
  Cypress.log({ name: "Login to Keycloak" });

  cy.log("Keyloak Login").then(async () => {
    cy.visit(`${Cypress.env('base_url')}#/home`);
    cy.wait(5000);

    const credentials = {
      username: Cypress.env("keycloak_user"),
      password: Cypress.env("keycloak_password"),
    };

    cy.get('[name="user"]').click();
    cy.get('[name="user"]').type(credentials.username);
    cy.get('[name="password"]').click();
    cy.get('[name="password"]').type(credentials.password, { log: false });
    cy.get('[name="login"]').click();

    cy.wait(1000)
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