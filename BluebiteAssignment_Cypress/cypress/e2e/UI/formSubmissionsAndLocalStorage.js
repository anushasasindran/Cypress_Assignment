import formData from '../../fixtures/formData.json';
import FormPage from '../POM/formPage'
import { getRandomCount } from '../../support/utils';

describe('Form Submission and Local storage management', () => {
    const formPage = new FormPage();
    beforeEach(() => {
        cy.visit('/');
    });
    //Verifying form submission with valid data from JSON and subsequent local storage count updates
    it('should submit the form with valid data and accurately track submission count in UI and local storage', () => {
        formData.validData.forEach((data, index) => {
            if (index === 0) {
                cy.getCountFromLocalStorage().then((localStorageCount) => {
                    expect(localStorageCount).to.be.null;
                });
            }
            cy.fillFormData(data.name, data.email, data.age, data.reason);
            formPage.verifySubmissionConfirmed(data.name)
            formPage.verifySubmissionCount(index + 1)

            cy.getCountFromLocalStorage().then((localStorageCount) => {
                expect(localStorageCount).to.equal(index + 1);
            });
            cy.reload();
        });
    });

    //Verfiying the submission count on setting the local storage with random value and deleting the local storage
    it('Should verify the submissions and localstorage by setting and deleting the count', () => {
        const randomCount = getRandomCount();
        const data = formData.validData[0]

        cy.fillFormData(data.name, data.email, data.age, data.reason);
        formPage.verifySubmissionCount(1)
        cy.setCountInLocalStorage(randomCount);
        cy.getCountFromLocalStorage().then((localStorageCount) => {
            expect(localStorageCount).to.equal(randomCount);
        });
        cy.reload()
        cy.fillFormData(data.name, data.email, data.age, data.reason);
        formPage.verifySubmissionCount(randomCount + 1)
        cy.deleteCountInLocalStorage();
        cy.getCountFromLocalStorage().then((localStorageCount) => {
            expect(localStorageCount).to.be.null;
        });
        cy.reload()
        cy.fillFormData(data.name, data.email, data.age, data.reason)
        formPage.verifySubmissionCount(1)
    });

    it('should clear the cookies and verify submissions', () => {
        const data = formData.validData[1]
        cy.fillFormData(data.name, data.email, data.age, data.reason);
        formPage.verifySubmissionCount(1)
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.visit('/')
        cy.fillFormData(data.name, data.email, data.age, data.reason)
        formPage.verifySubmissionCount(1)
    });

});
