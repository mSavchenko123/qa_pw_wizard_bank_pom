# Wizard Bank Test Framework with POM

An automation testing project for the Wizard Bank demo application using Playwright and Page Object Model (POM).

## Description

This repository contains an end-to-end (E2E) testing framework built with Playwright and structured using the Page Object Model pattern.  
It automates testing of the Wizard Bank platform to ensure the reliability of core features such as customer operations, manager actions, transactions, and account management.

## Repository Structure

```
qa_pw_wizard_bank_pom/
├── src/
│ ├── pages/ # Page Object Models (POM) for UI abstraction
├── tests/ # Test cases covering different user scenarios
├── .gitignore # Git ignore rules
├── package.json # Node.js dependencies and scripts
├── playwright.config.js # Playwright configuration file
├── README.md # Project documentation
├── TaskDescription.md # Description of the task requirements
```

## Used Technologies

- Playwright  
- JavaScript
- Faker.js  
- Page Object Model (POM) pattern

## Commands

### Install Dependencies  
`'npm install'`  
`'npx playwright install'`

### Run Tests in headed mode  
`'npx playwright test'`

### Run Tests in debug mode  
`'npx playwright test --debug'`

### Run Playwright Test Runner UI  
`'npx playwright test --ui'`

### Run a specific test file  
`'npx playwright test tests/<test-file-name>.spec.js'`

## Useful Information

The tests cover user scenarios such as:

- Customer login, logout, deposits, withdrawals  
- Manager login, adding/deleting customers and accounts  
- Verifying transactions and account data integrity

Tests are organized under the `'tests/'` directory, with UI interactions abstracted via Page Object Models in `'src/pages/'`.  
Playwright configuration is set in `playwright.config.js`.
