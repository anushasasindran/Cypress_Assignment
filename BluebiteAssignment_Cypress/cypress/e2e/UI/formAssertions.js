import FormPage from '../POM/formPage'
import formData from '../../fixtures/formData.json';

describe('validate form - field, title etc', () => {
    const formPage = new FormPage();
    beforeEach(() => {
        cy.visit('/');
    });
    //To validate the titel and input fields
    it('Should verify the Title and Form texts assertions', () => {
        formPage.verifyPresenceTitleandFields()
    })
    //To validate the focus on input field - This test case throw error due to bug 
    it('Should verify the focus on Input', () => {
        formPage.verifyFocusInputFields()
    })
    //To validate the error fields on no data or error data due to bus
    it('Should verify the Error fields', () => {
        formPage.verifyErroronFields()
    })
    //To validate the form submission with age <18 values. Age 17 throws error since it allows for submission
    it('Should verify the form submission with data of age less than 18 ', () => {
        let errorMessages = [];
        formData.ageLessthan18.forEach((data) => {
            cy.fillFormData(data.name, data.email, data.age, data.reason);
            formPage.verifySubmissionAgeLessthan18(data.age, errorMessages)
            cy.reload();
        });
        cy.log(errorMessages)
        cy.then(() => {
            expect(errorMessages).to.be.empty
        })
    });
    //Verifying with different conditions 
    //Age should not be 0 or less, should not be char, should not be special char
    //Name should not be numeric, special characters, single char
    //Email should be in correct format
    it('Should verify with different error data', () => {
        let errorMessages = [];
        formData.invalidData.forEach((data) => {
            cy.fillFormData(data.name, data.email, data.age, data.reason);
            formPage.verifyformSubmissionInvalidData(data, errorMessages)
            cy.reload();
        });
        if (errorMessages.length > 0) {
            cy.log(`Errors found:\n ${errorMessages.join('\n')}`)
        }
        cy.then(() => {
            expect(errorMessages).to.be.empty
        })

    });
})

