import helperBase from '../helperBase/helperBase'
class FormPage extends helperBase {
    constructor() {
        super()
        this.nameInput = '#input-3';
        this.nameText = 'label[for="input-3"]'
        this.emailInput = '#input-4';
        this.emailText = 'label[for="input-4"]'
        this.ageInput = '#input-8';
        this.ageText = 'label[for="input-8"]'
        this.reasonInput = '#input-9';
        this.reasonText = 'label[for="input-9"]'
        this.submitButton = '.button-sc-1ta45yz-0.cljsFy';
        this.submitMessage = 'div.cmpVnN'
        this.formTitle = '.snippet__Body-sc-12bo3rm-0'
        this.image = '.image__ImageBody-sc-zf38f1-0'
    }

    fillName(name) {
        cy.get(this.nameInput).type(name);
    }
    fillEmail(email) {
        cy.get(this.emailInput).type(email);
    }
    fillAge(age) {
        cy.get(this.ageInput).type(age);
    }
    fillReason(reason) {
        cy.get(this.reasonInput).type(reason);
    }
    submit() {
        cy.get(this.submitButton).click();
    }

    verifyPresenceTitleandFields() {
        cy.get(this.formTitle).should('be.visible').and('have.text', 'Enter chance to win!')
        cy.get(this.nameText).should('be.visible').invoke('text').then((text) => {
            expect(text).to.eq('Name*')
        })
        cy.get(this.emailText).should('be.visible').and('have.text', 'Email*')
        cy.get(this.ageText).should('be.visible').and('have.text', 'Age*')
        cy.get(this.reasonText).should('be.visible').and('have.text', 'Reason')
        cy.get(this.submitButton).should('be.visible').and('have.text', 'Submit')
    }

    verifyFocusInputFields() {
        //On focus on input field that should be blue color
        cy.get(this.nameInput).should('have.css', 'border-color', 'rgb(221, 221, 221)')
        cy.get(this.nameInput).trigger('mouseover').then(($el) => {
            const borderColor = $el.css('border-color')
            if (borderColor !== 'rgb(0, 0, 255))') {
                throw new Error("Bug detected:Input field does not turn as blue on focus")
            }
            expect(borderColor).to.eq('rgb(0, 0, 255)', 'The input field turns to blue as expected')
        })
    }
    verifyErroronFields() {
        //Submit without values. All mandatory fields border should turn to red
        cy.get(this.submitButton).click()
        const mandatoryFields = [this.nameInput, this.emailInput, this.ageInput]
        cy.wrap(mandatoryFields).each((field) => {
            cy.get(field).should(($el) => {
                const borderColor = $el.css('border-color')
                if (borderColor !== 'rgb(255, 0, 0)') {
                    throw new Error("Bug detected:Input field did not turn to red on error")
                }
                else {
                    cy.get(field).should('have.css', 'border-color', 'rgb(255, 0, 0)')
                }
            })
        })
    }

    verifySubmissionConfirmed(name) {
        cy.get(this.submitMessage).eq(1).should('contain', `Submission Confirmed, ${name}`)
    }
    verifySubmissionAgeLessthan18(age, errorMessages) {
        const expectedMessage = 'Must be 18 or older to enter.'
        cy.get(this.submitMessage).eq(1).then(($msg) => {
            const messageText = $msg.text()
            if (messageText.includes(expectedMessage)) {
                expect(messageText).to.include(expectedMessage)
            }
            else {
                errorMessages.push(`Bug Detected: Submission allowed for age:${age}`)
            }
        })
    }
    verifyformSubmissionInvalidData(data, errorMessages) {
        if (!data.name || data.name.length === 1 || /[^A-Za-z\s]/.test(data.name)) {
            cy.log("Invalid name: Empty, single character, or contains non-alphabetic characters.")
            errorMessages.push("Invalid name: Empty, single character, or contains non-alphabetic characters.");
            if (!data.email || data.email.length === 1 || !/\S+@\S+\.\S+/.test(data.email)) {
                cy.log("Invalid email: Empty, single character, or incorrect format.")
                errorMessages.push("Invalid email: Empty, single character, or incorrect format.");
            }
            if (!data.age || data.age <= 0 || /[^0-9]/.test(data.age)) {
                cy.log("Invalid age: Empty, less than or equal to 0, or contains non-numeric characters.")
                errorMessages.push("Invalid age: Empty, less than or equal to 0, or contains non-numeric characters.");
            }
        }
        cy.get(this.submitMessage).eq(1).then(($msg) => {
            const messageText = $msg.text()
            if ((messageText.includes("Must be 18 or older to enter" || "Submission Confirmed")))
                errorMessages.push("Bug Detected: Submission happened with invalid data")
        })
    }

    verifySubmissionCount(count) {
        cy.get(this.submitMessage).eq(2).should('contain', `You have registed ${count} submissions`)
    }

    verifyCSSProperties(
        itemName,
        fontSize,
        fontWeight,
        fontFamily,
        color
    ) {
        let cssLocator;
        switch (itemName) {
            case "title-Text":
                cssLocator = this.formTitle
                break;
            case "submit-Button":
                cssLocator = this.submitButton;
                break;
            default: throw new Error(`Unknown item name :${itemName}`)
        }
        this.cssProperties(
            cssLocator,
            fontSize,
            fontWeight,
            fontFamily,
            color
        );
    }
    verifyImageCSSProperties(
        itemName,
        height,
        width,
        radius,
    ) {
        let cssLocator = this.image;
        switch (itemName) {
            case "header-Image":
                this.imageCssProperties(
                    cy.get(cssLocator).eq(0),
                    height,
                    width,
                    radius
                );
                break;
            case "footer-Image":
                this.imageCssProperties(
                    cy.get(cssLocator).eq(1),
                    height,
                    width,
                    radius
                );
                break;
            default: throw new Error(`Unknown item name :${itemName}`)
        }
    }
    verifyInputFieldsCSSProperties(
        itemName,
        fontSize,
        fontWeight,
        color,
        borderRadius,
        borderColor,
        borderWidth,
        backgroundColor,
        height,
        width
    ) {
        let cssLocator;
        switch (itemName) {
            case "name-Field":
                cssLocator = this.nameInput
                break;
            case "email-Field":
                cssLocator = this.emailInput;
                break;
            case "age-Field":
                cssLocator = this.ageInput;
                break;
            case "reason-Field":
                cssLocator = this.reasonInput;
                break;
            default: throw new Error(`Unknown item name :${itemName}`)
        }
        this.inputFieldCssProperties(
            cssLocator,
            fontSize,
            fontWeight,
            color,
            borderRadius,
            borderColor,
            borderWidth,
            backgroundColor,
            height,
            width
        );
    }
}

export default FormPage;
