# **CypressE2EComplete**
This repository contains a Cypress Framework to validate the UI features of a particular website.  
It demonstrates robust examples of data-driven testing using JSON files, using Mocha BDD framework, Page Object Model for design pattern, Mochaawesome reports for reporting
# **Description**  
The application tested : https://blue-bite-dev-3.bluebite.io/04425f7c-4fdd-47f6-85b3-b800d12bb9ca  
**Framework Design**  
**e2e folder** : This contains the folders  
POM  
helperBase  
UI  
POM contais the formPage.js that contains the locators and functions for the formPage    
helperBase contains the helperBase.js that contain common functions for formPage.js and this is Parent class to formPage.js  
UI folder contains testcases   
The test cases are categorized as   
**formSubmissionsAndLocalStorage.js** - Verifying form submission with valid data from JSON and subsequent local storage count updates. 
Setting, getting and deleting the count from local storage to verify the submission count  
**formAssertions.js** - Verifying the form, input fields with different set of both positive and negative values  
**formCssAssertions.js** - Based on the design document provided verifying the CSS properties of Images, Input fields, Title, Buttons etc  
**responsivetest.js** - Three viewport size are selected, one for iphone, one for android and one for tablet and verifying the reponsiveness  
A master spec file order.testCases.cy.js to keep the test cases in order to execute  

**Fixtures folder** - For data driven testing. Data in the form of JSON  
cssData.json - Contains data for all the CSS properties of each element  
formData.json - Positive and negative values for the form submission  

**Support folder**  
command.js - Contains the command functions  
util.js - Common functions  

**Package.json** - For dependencies and scripts . The scripts to run are saved here  
**cypress.config.json** - For global settings  

# **Pre-requistes**  
**Operating System**: Cypress is a desktop application that is installed on your computer. It supports macOS, Linux, and Windows.   
**Node.js**: Cypress is a Node.js application. Ensure you have Node.js (and npm) installed. A version of 10 or above is recommended.  
**Supported Browsers**: While Cypress can run tests in any browser installed on your machine, it's good to have Chrome, Firefox, Edge installed and updated to latest versions.  
**Development Environment**: Code editor(preferably Visual studio code).  

# **Installation**  
**Create a folder**: Create a folder in your system. Open the folder in VS or any command line tool.  
**Commands**  
npm init – After this command is ran it created package.json file in folder   
npm install cypress --save-dev : This installs the latest cypress version  
npm install cypress@12.16.0 : If you want any specific cypress version to download  
	Node modules folder is created once the cypress is installed  
npx cypress open : This open the cypress test runner and to configure framework  

# **How to run cypress tests**  
**Using cypress test runner** : npx cypress open command to open test runner. Click on each spec files and run it.   
**Using command line headless mode**: npx cypress run runs all the specs under the e2e folder one by one based on the order in that folder.   
**Using command line headless mode to run a single file**: npx cypress run --spec “filepath” runs a single file from the file path mentioned.    
**Using command line headed mode to run in specific browsers** : "npx cypress run --headed --browser <broswername> --spec ‘folder path’”  

# *Reporting*
Mochawesome reports are used.  
Install by using the below commands:  
npm install mochawesome --save-dev  
npm install mochawesome-merge --save-dev  
npm install mochawesome-report-generator --save-dev  

# **Scripts to run the tests**  
The scripts to run are given under Scripts on Package.json file(to run in test runner and Commandline in headed and non-headed).  
npm run clean-up(to clean the previous results)  
npm run CLtest(to run the UI tests in CL)  
npm run chromeTest(to run the UI tests in Chrome Browser)  
npm run mochawesome-merge(to generate the reports)  

# **Scripts to run the tests**  
Test results are available under mochaawesome-report folder 
Total TC : 16  
Passed : 12  
Failed : 4  
4 test cases are failing due to the below bugs in application  
 1. Input age 17 should show message that 'Age must be greater than or equal to 18". Currenly it is submitting the data though age is less than 18  
 2. On focus the input fields(name,age,email,reason) should turns to blue color. Currently it shows in black color  
 3. On error fields - empty fields or error on fields, the field border should turns to red. However currently that is not happening  
 4. The input fields currently allows   
    Name - numeric and special characters, single char  
    Email - empty email, email format check not happening  
    Age - allows chars, age 0 and negative values  
    
