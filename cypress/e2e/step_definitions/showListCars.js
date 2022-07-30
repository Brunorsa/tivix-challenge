const { Given, And, When, Then } = require("@badeball/cypress-cucumber-preprocessor/lib/methods");

Given(/^the form is visible$/, () => {
  cy.visit('/');
  cy.get('#search_form').should('be.visible');
});

And(/^I insert the pick-up and drop-off dates$/, () => {
  cy.get('#pickup').type('2022-07-29');
  cy.get('#dropoff').type('2022-07-29');
});


When(/^I click in the ‘Search’ button$/, () => {
  cy.get('.btn').should('be.visible').click();
});

Then(/^It should appears a list of cars for me$/, () => {
  cy.get('#search-results').should('be.visible');
});