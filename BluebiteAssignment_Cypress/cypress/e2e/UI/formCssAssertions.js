import cssData from '../../fixtures/cssData.json';
import FormPage from '../POM/formPage'
//To assert the CSS properties
describe('CSS assertions', () => {
    const formPage = new FormPage();
    beforeEach(() => {
        cy.visit('/');
    });

    it('Title CSS assertions', () => {
        formPage.verifyCSSProperties(
            "title-Text",
            cssData["title-Text"]["font-size"],
            cssData["title-Text"]["font-weight"],
            cssData["title-Text"]["font-family"],
            cssData["title-Text"]["color"]
        )
    })
    it('Submit button CSS assertions', () => {
        formPage.verifyCSSProperties(
            "submit-Button",
            cssData["submit-Button"]["font-size"],
            cssData["submit-Button"]["font-weight"],
            cssData["submit-Button"]["font-family"],
            cssData["submit-Button"]["color"]

        )
    })
    it('Header Image CSS assertions', () => {
        formPage.verifyImageCSSProperties(
            "header-Image",
            cssData["header-Image"]["height"],
            cssData["header-Image"]["width"],
            cssData["header-Image"]["border-radius"],

        )
    })
    it('Footer Image CSS assertions', () => {
        formPage.verifyImageCSSProperties(
            "footer-Image",
            cssData["footer-Image"]["height"],
            cssData["footer-Image"]["width"],
            cssData["footer-Image"]["border-radius"],

        )
    })

    it('Imput Fields CSS assertions', () => {

        formPage.verifyInputFieldsCSSProperties(
            "name-Field",
            cssData["name-Field"]["font-size"],
            cssData["name-Field"]["color"],
            cssData["name-Field"]["border-radius"],
            cssData["name-Field"]["font-weight"],
            cssData["name-Field"]["border-color"],
            cssData["name-Field"]["border-width"],
            cssData["name-Field"]["background-color"],
            cssData["name-Field"]["height"],
            cssData["name-Field"]["width"]

        )
        formPage.verifyInputFieldsCSSProperties(
            "email-Field",
            cssData["email-Field"]["font-size"],
            cssData["email-Field"]["color"],
            cssData["email-Field"]["border-radius"],
            cssData["email-Field"]["font-weight"],
            cssData["email-Field"]["border-color"],
            cssData["email-Field"]["border-width"],
            cssData["email-Field"]["background-color"],
            cssData["email-Field"]["height"],
            cssData["email-Field"]["width"]
        )
        formPage.verifyInputFieldsCSSProperties(
            "age-Field",
            cssData["age-Field"]["font-size"],
            cssData["age-Field"]["color"],
            cssData["age-Field"]["border-radius"],
            cssData["age-Field"]["font-weight"],
            cssData["age-Field"]["border-color"],
            cssData["age-Field"]["border-width"],
            cssData["age-Field"]["background-color"],
            cssData["age-Field"]["height"],
            cssData["age-Field"]["width"]
        )
        formPage.verifyInputFieldsCSSProperties(
            "reason-Field",
            cssData["reason-Field"]["font-size"],
            cssData["reason-Field"]["color"],
            cssData["reason-Field"]["border-radius"],
            cssData["reason-Field"]["font-weight"],
            cssData["reason-Field"]["border-color"],
            cssData["reason-Field"]["border-width"],
            cssData["reason-Field"]["background-color"],
            cssData["reason-Field"]["height"],
            cssData["reason-Field"]["width"]
        )
    })

})