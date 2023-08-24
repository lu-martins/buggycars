Feature: Page Registration
    As a visitor
    I want to be able to register on the website
    So that I can vote for a sport car

    Scenario: Successful Registration
        Given I am a visitor on the registration page
        When I fill in the registration form with valid details
        And my password meets the criteria: minimum 8 characters (1 Uppercase + 1 lowercase + 1 special character)
        And I submit the form
        Then I should see a success message "Registration is sucessfull"

    Scenario: Visitor Already Registered
        Given I am a visitor on the registration page
        And I have already registered on the website with valid details
        When I try to register again using the same username "maryjane82"
        And I submit the form
        Then I should see an error message "User already exists"

    Scenario: Password with no policy criteria - no uppercase
        Given I am a visitor on the registration page
        When I fill in the registration form with valid details
        And my password does not meet the criteria of 1 Uppercase
        And I submit the form
        Then I should see an error message "Password did not conform with policy: Password must have uppercase characters"

    Scenario: Password with no policy criteria - no lowercase
        Given I am a visitor on the registration page
        When I fill in the registration form with valid details
        And my password does not meet the criteria of 1 lowercase
        And I submit the form
        Then I should see an error message "Password did not conform with policy: Password must have lowercase characters"

    Scenario: Password with no policy criteria - no special character
        Given I am a visitor on the registration page
        When I fill in the registration form with valid details
        And my password does not meet the criteria of 1 special character
        And I submit the form
        Then I should see an error message "Password did not conform with policy: Password must have symbol characters"

    Scenario: Password with no policy criteria - Minimum characters
        Given I am a visitor on the registration page
        When I fill in the registration form with valid details
        And my my password meets the criteria but is shorter than 6 characters, i.e, "Non!"
        And I submit the form
        Then I should see an error message "Password did not conform with policy: minimum field size of 6"

    Scenario: Password with no policy criteria - Not long enough
        Given I am a visitor on the registration page
        When I fill in the registration form with valid details
        And my password meets the criteria but just have 7 characters, i.e, "BgyCar!"
        And I submit the form
        Then I should see an error message "Password did not conform with policy: Password not long enough"

    Scenario: Password with no policy criteria - Maximum character
        Given I am a visitor on the registration page
        When I fill in the registration form with valid details
        And my password meets the criteria but is greater than 100 characters
        And I submit the form
        Then I should see an error message "Password did not conform with policy: Password not long enough"

    Scenario: Password invalid format
        Given I am a visitor on the registration page
        When I fill in the registration form with valid details
        And my password is "none"
        And I submit the form
        Then I should see an error message "Password did not conform with policy"

    Scenario: Password breached
        Given I am a visitor on the registration page
        When I fill in the registration form with valid details
        And my password is a breached password "Iloveyou123!"
        And I submit the form
        Then I should see an error message "This password has previously appeared in a data breach and should never be used."
