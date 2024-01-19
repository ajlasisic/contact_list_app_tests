# Contact List App UI and API automation tests 

Welcome to the Contact List App Tests repository! This repository contains automated API and UI tests for the Contact List application (https://thinking-tester-contact-list.herokuapp.com/). 
It also contains two excel spreadsheets with UI and API test cases (Smoke and Regression) and a bug report.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Clone the Repository](#clone-the-repository)
- [Running Tests](#running-tests)
  - [Install Dependencies](#install-dependencies)
  - [API Tests](#api-tests)
  - [UI Tests](#ui-tests)
- [Test Case Documents](#test-cases)
  

## Prerequisites

Before running the tests, ensure that you have the following prerequisites installed:

- [Node.js](https://nodejs.org/) and npm (Node Package Manager)

## Getting Started

### Clone the Repository
- git clone https://github.com/ajlasisic/contact_list_app_tests.git
- cd contact_list_app_tests
## Running tests
### Install Dependencies
npm install
### API Tests
- API Smoke test: npx wdio wdio.conf.js --spec .\api_tests\specs\smoke.e2e.js
- API Regression test: npx wdio wdio.conf.js --spec .\api_tests\specs\regression.e2e.js
### UI Tests
- UI Smoke test: npx wdio wdio.conf.js --spec .\ui_tests\specs\smoke.spec.js
- UI Regression test: npx wdio wdio.conf.js --spec .\ui_tests\specs\regression.spec.js
## Test case documents
- UI: https://docs.google.com/spreadsheets/d/1OfKRQ0rYE-Kdbvg8iqhIy81gURhVzWq4CjNQU37hAxI/edit?usp=sharing
- API: https://docs.google.com/spreadsheets/d/1w0KnviP7ywT_82KT8mUBqpQhJvKJLo6imm8hlJRhIu8/edit?usp=sharing

