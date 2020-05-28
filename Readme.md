# Cypress E2E Test  Framework

This framework will help you to write your test and generate html reports for thr same.
## Getting Started

To get started clone project from github. 

Prerequisites

* Nodejs should be installed.
* Docker should be installed.
* Demo application image should be downloaded using below command
```
docker pull spreecommerce/spree
```

The library which plays a major role in building this framework is Cypress. In Cypress all the things are so symplified people dont even have to bother about seting up any framework with one command of cypres your whole setup is ready for you

## Folder Structre

```
├── cypress
│   ├── fixtures
│   ├── integration
│   │   ├── BasicTest
│   │   └── examples
│   ├── mochareports
│   ├── plugins
│   ├── reports
│   │   └── mocha
│   ├── screenshots
│   │   └── examples
│   │       └── cypress_api.spec.js
│   ├── support
│   └── videos
│       └── examples

```
[Fixtures](https://github.com/vinaygupta2050/e2eCypressFramework/tree/master/cypress/fixtures): This folder is responsible for storing any media which would be required while testing and that can be any file.

[Integration](https://github.com/vinaygupta2050/e2eCypressFramework/tree/master/cypress/integration): In this folder we write our e2e test.

## Configuration

* All the Environment variable are stored in [cypress.json](https://github.com/vinaygupta2050/e2eCypressFramework/cypress.json) file
* Dependency and Custom scripts are maintained in [package.json](https://github.com/vinaygupta2050/e2eCypressFramework/package.json) file

## Running Demo Application

* Use below command to install all the required dependencies.
```
npm install --save-dev
```

### Target Environments
* All the Environment variable are stored in [cypress.json](https://github.com/vinaygupta2050/e2eCypressFramework/cypress.json) file
```
  "baseUrl": "http://localhost:3000",
  "env": {
    "userName": "spree@example.com",
    "password": "spree123"
  }
```
## Running Demo Application

Once docker image of demo application is downloaded. Run the application running shell script [bootApplication.sh](https://github.com/vinaygupta2050/e2eCypressFramework/bootApplication.sh) by using below command
```
sh bootApplication.sh
```
## Writing Test

Once you have finished all the setup its time to write your first test. Below is the sample code
```
describe("Test Spree Application",()=>{ 
it("Verify Search Product Functionality",()=>{
    cy.visit("/")
    cy.url().should("include", "/login");
    cy.get('#spree_user_email').type(Cypress.env("userName"));
    cy.get('#spree_user_password').type(Cypress.env("password"));
    cy.get(':nth-child(5) > .btn').click();
   })
})
```

## Running your Test

Once your test is written we will be using custom command to run our script mentioned in [package.json](https://github.com/vinaygupta2050/e2eCypressFramework/package.json)

* Run the script using below command
```
npm run chrome
```
## Test Results

Once all the test is executed. Lets consolidate all the mochareports which is in json format and convert it to html reports.
* Merge all the mocha reports json
```
npm run merge
```
* Generate HTML report from the merged json report
```
npm run report
```
Report is generated in [report.html](https://github.com/vinaygupta2050/e2eCypressFramework/blob/master/report.html)
## Author

* **Vinaykumar Gupta** - [LinkedIn](https://in.linkedin.com/in/vinaygupta2050)
