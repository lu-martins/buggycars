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

Cypress.Commands.add('getRandomUserFromAPINZ', () => {
    return cy.request('GET', 'https://randomuser.me/api/?nat=nz').its('body.results[0]').then((user) => {
        const gender = user.gender;
        const title = user.name.title;
        const first_name = user.name.first;
        const last_name = user.name.last;
        const email = user.email;
        const street = user.location.street;
        const state = user.location.state;
        const country = user.location.country;
        const city = user.location.city;
        const postcode = user.location.postcode;
        const birth = user.dob.date;
        const phone = user.phone;
        const mobile = user.cell;
        const picture = user.picture.medium
        const username = login.username
        const password = login.password


        return {
            gender,
            first_name,
            last_name,
            email,
            title,
            street,
            state,
            country,
            postcode,
            birth,
            phone,
            mobile,
            picture,
            city,
            username,
            password,
        };
    });
});