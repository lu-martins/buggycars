describe('Profile', () => {
    beforeEach(() => {
        // Clear cookies and local storage before each test
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://buggy.justtestit.org/')
        cy.viewport(1920, 1080)

        const login = 'maryjane82'
        const password = 'Password1!'

        //Username and password
        cy.get('.input-sm').type(login)
        cy.get('.ng-pristine').type(password)

        //Login button
        cy.get('.btn-success').click()

        //Enter profile
        cy.get(':nth-child(2) > .nav-link').click({ force: true })

    })

    it('Updating Basic info', () => {

        //Changing names
        cy.get('#firstName').clear()
        cy.get('#firstName').type('Mary Jane{enter}')

        cy.get('#lastName').clear()
        cy.get('#lastName').type('Smith Doe')

        cy.get('.btn-default').click() // save

        //assertion
        cy.get(':nth-child(1) > .result').should('include.text', 'The profile has been saved successful')
        
        cy.screenshot('Profile - Updating Names')

        //rollback
        cy.get('#firstName').clear()
        cy.get('#firstName').type('Mary{enter}')

        cy.get('#lastName').clear()
        cy.get('#lastName').type('Smith')

        cy.get('.btn-default').click()

    })

    it('Updating Additional Info', () => {

        // Extract the random name from the response 
        cy.request('https://randomuser.me/api/?nat=nz').then((response) => {

            cy.wait(5000)

            const age = response.body.results[0].dob.age
            const streetno = response.body.results[0].location.street.number
            const street = response.body.results[0].location.street.name
            const city = response.body.results[0].location.city
            const state = response.body.results[0].location.state
            const country = response.body.results[0].location.country
            const postcode = response.body.results[0].location.postcode
            const phone = response.body.results[0].phone
            const hobby = ['Hiking', 'Reading', 'Working', 'Learning', 'Video Games', 'Biking', 'Movies', 'Reading Comics', 'Jogging', 'Kinitting', 'Bird-watching', 'Other']

            // Generate a random index within the range of the list length
            const randomIndex = Math.floor(Math.random() * hobby.length)

            // Get the random value from the list using the generated index
            const randomHobby = hobby[randomIndex]
            cy.log(randomHobby)

            cy.get('#gender').clear()
            cy.get('#gender').type('Female')

            cy.get('#age').clear()
            cy.get('#age').type(age)

            cy.get('#address').clear()
            cy.get('#address').type(streetno + ',' + street + ',' + city + ',' + state + ',' + country + ',' + postcode)

            cy.get('#phone').clear()
            cy.get('#phone').type(phone)

            cy.get('#hobby').select(randomHobby)

            cy.get('.btn-default').click() //save

            //assertion
            cy.get('.result').should('include.text', 'The profile has been saved successful')
            
            cy.screenshot('Profile - Updating Additional Info')
        })
    })

    it('Updating password', () => {

        const password = 'Password1!'
        const new_password = 'Password2!'

        //Changing password
        cy.get('#currentPassword').type(password)
        cy.get('#newPassword').type(new_password)
        cy.get('#newPasswordConfirmation').type(new_password)

        cy.get('.btn-default').click() // save

        //assertion
        cy.get(':nth-child(1) > .result').should('include.text', 'The profile has been saved successful')
        
        cy.screenshot('Profile - Updating Password')

        //rollback

        cy.get('#currentPassword').type(new_password)
        cy.get('#newPassword').type(password)
        cy.get('#newPasswordConfirmation').type(password)

        cy.get('.btn-default').click() // save

    })

})