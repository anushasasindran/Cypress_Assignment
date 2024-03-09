import FormPage from '../POM/formPage'
import formData from '../../fixtures/formData.json';
const formPage = new FormPage();
const viewports = [
    { width: 375, height: 812 },
    { width: 768, height: 1024 },
    { width: 1280, height: 720 }
]
beforeEach(() => {
    cy.visit('/');
});
describe('Responsive Testing with different viewports', () => {
    viewports.forEach((viewport) => {
        it(`Should work correctly on viewport ${viewport.width}x${viewport.height}`, () => {

            cy.viewport(viewport.width, viewport.height);
            cy.screenshot()
            formPage.verifyPresenceTitleandFields()
            const data = formData.validData[1]
            cy.fillFormData(data.name, data.email, data.age, data.reason);
            formPage.verifySubmissionCount(1)
            cy.reload()

            cy.log(`Testing viewport: ${viewport.width}x${viewport.height}`);
        });
    });

})