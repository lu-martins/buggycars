# buggycars
Test automation in Cypress for the Buggy Car Ratings website - https://buggy.justtestit.org

# Cypress Project Setup and Execution Guide

This guide will walk you through the steps to set up and run a Cypress project using Visual Studio Code and Node.js.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (>=12.0.0)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) (>=12.17)

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/lu-martins/buggycars.git
   cd buggycars

## Install Dependencies:

Install project dependencies using Node Package Manager (npm):
npm install cypress --save-dev

-For more info about how to install Cypress, check https://docs.cypress.io/guides/getting-started/installing-cypress

## Running Tests

1. Opening the Project in Visual Studio Code

2. Running Cypress Tests: 

You can run Cypress tests using the following npm command:

npx cypress open

3. Select the E2E Testing

4. Select the Chrome Browser

5. Start E2E Testing in Chrome

6. Select a desired spec to run just clicking on it

## BDD Scenarios

All BDD scenarios are available on /buggycars/bdd_scenarios

## Bug Reporting

All bugs found are available on /buggycars/bug_reports

## Evidences

After running a spec, then the evidence can be found on /cypress/screenshots

## Configuration

Cypress configuration can be found in cypress.json.
In this file, you can configure various settings such as baseUrl, viewport size, etc...

## Continuous Integration

You can integrate your Cypress tests into your CI/CD pipeline by using the Cypress CLI commands in your CI configuration file (e.g., .github/workflows/main.yml for GitHub Actions).

## Contributing

Feel free to contribute to this project by opening issues or pull requests. Your feedback and contributions are highly appreciated!
