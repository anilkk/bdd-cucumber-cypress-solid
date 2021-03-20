// ***********************************************
// This example commands.js shows you how to
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
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })


// getBySel yields elements with a test-data attribute that match a specified selector.
Cypress.Commands.add("getBySel", (selector, ...args) => {
    return cy.get(`[test-data="${selector}"]`, ...args);
  });

// getBySel yields elements with a test-data attribute that match a specified selector.
Cypress.Commands.add("findBySel", (selector, ...args) => {
    // then waits till element availble
    return cy.get('body').then($body => $body.find(`[test-data="${selector}"]`, ...args));
  });
