# Buggy Cars Rating

Test automation in Cypress for the Buggy Car Ratings website - https://buggy.justtestit.org

# Cypress Project Setup and Execution Guide

This guide will walk you through the steps to set up and run a Cypress project using Visual Studio Code and Node.js.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>=12.0.0)
- [Visual Studio Code](https://code.visualstudio.com/)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lu-martins/buggycars.git
   cd buggycars

## Install Dependencies:

Open a terminal or command prompt and navigate to the directory where you've downloaded the Cypress project using the cd command.

Inside the project directory, you'll typically find a **package.json** file. This file lists all the dependencies required for the project. Run the following command to install these dependencies:

```npm install```

Cypress versions are usually specified in the project's **package.json** file under the devDependencies section. When you run npm install in the project directory, npm will automatically install the versions of packages specified in the package.json file. For this project, Cypress version 12.17.4 will be installed.

- For more info about how to install Cypress, check https://docs.cypress.io/guides/getting-started/installing-cypress

## Open Cypress

1. Opening the Project in Visual Studio Code and open a new terminal

2. Running Cypress Tests: 

You can run Cypress tests using the following npm command:

```npx cypress open```
 
This command will open the Cypress Test Runner Window.

![image](https://github.com/lu-martins/buggycars/assets/107568709/805068ff-84fb-4592-9204-76cfd602ae40)

## Run Tests

1. Select the E2E Testing

4. Select the Chrome Browser

5. Click on 'Start E2E Testing in Chrome' button

6. Select a desired spec to run just by clicking on it:

![image](https://github.com/lu-martins/buggycars/assets/107568709/2b6fc786-f98f-46ef-a1fc-1f174fe9d419)


## BDD Scenarios

All BDD scenarios are available on /buggycars/bdd_scenarios

## Bug Reporting

All bugs found are available on /buggycars/bug_reports

## Evidences

After running a spec, the evidence can be found on /cypress/screenshots

## API

The test data for creating a new login and other data is getting from [Random User Generator](https://randomuser.me/documentation#howto)

## Contributing

Feel free to contribute to this project by opening issues or pull requests. Your feedback and contributions are highly appreciated!
