const { Given, And, When, Then } = require("@badeball/cypress-cucumber-preprocessor/lib/methods");


Given(/^I provide the form$/, () => {
	cy.visit('/');
  cy.get('#pickup').type('2022-07-29');
  cy.get('#dropoff').type('2022-07-29');
});

And(/^the list of the cars are visible$/, () => {
	cy.get('.btn').should('be.visible').click();
  cy.get('#search-results').should('be.visible');
});

And(/^choose a car to rent$/, () => {
  cy.get(':nth-child(1) > :nth-child(7) > .btn').should('be.visible');
});

When(/^I click in the ‘Rent’ button$/, () => {
	cy.get(':nth-child(1) > :nth-child(7) > .btn').click();
});

Then(/^should show a modal with all the informations like company, price per day, location, license plate, and the pick-up and drop-off dates$/, () => {
	cy.get('.card').should('exist');
});


