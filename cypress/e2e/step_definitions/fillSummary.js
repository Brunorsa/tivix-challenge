import { faker } from '@faker-js/faker';
const { Given, And, When, Then } = require("@badeball/cypress-cucumber-preprocessor/lib/methods");

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const email = faker.internet.email();
const datePick = new Date().toISOString().slice(0, 10);

Given(/^I’m in the detail’s screen$/, () => {
  cy.visit('/');
  cy.get('#pickup').type(datePick);
  cy.get('#dropoff').type(datePick);
  cy.get('.btn').click();
  cy.get(':nth-child(1) > :nth-child(7) > .btn').click();
});

And(/^I click the first ‘Rent!’ button$/, () => {
  cy.get('.card-body').should('exist');
  cy.get('.btn').should('be.visible').click();
});

And(/^show me the summary form to fill$/, () => {
  cy.get('#content').should('exist');
  cy.get('#rent_form').should('exist');
});

And(/^fill all the inputs like, name, last name, card number and email$/, () => {
  cy.get('#name').type(firstName);
  cy.get('#last_name').type(lastName);
  cy.get('#card_number').type('5448280000000007');
  cy.get('#email').type(email.toLowerCase());
});

When(/^I click in the second ‘Rent’ button$/, () => {
  cy.get('.btn').should('exist').click();
});

Then(/^should show a success screen$/, () => {
  cy.contains('Success Rent!').should('exist');
});


