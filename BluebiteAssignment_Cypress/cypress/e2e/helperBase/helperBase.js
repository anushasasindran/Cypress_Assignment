class helperBase {
    cssProperties(
        cssLocator,
        fontSize,
        fontWeight,
        fontFamily,
        color
    ) {
        cy.get(cssLocator).should('have.css', 'font-size', fontSize);
        cy.get(cssLocator).should('have.css', "color", color);
        cy.get(cssLocator).should('have.css', "font-family", fontFamily);
        cy.get(cssLocator).should('have.css', "font-weight", fontWeight);
    }

    imageCssProperties(
        cyElement,
        height,
        width,
        radius
    ) {
        cyElement.should('have.css', 'height', height);
        cyElement.should('have.css', "width", width);
        cyElement.should('have.css', "border-radius", radius);
    }

    inputFieldCssProperties(
        cssLocator,
        fontSize,
        color,
        borderRadius,
        fontWeight,
        borderColor,
        borderWidth,
        backgroundColor,
        height,
        width
    ) {
        cy.get(cssLocator).should('have.css', 'font-size', fontSize);
        cy.get(cssLocator).should('have.css', "color", color);
        cy.get(cssLocator).should('have.css', "border-radius", borderRadius);
        cy.get(cssLocator).should('have.css', "font-weight", fontWeight);
        cy.get(cssLocator).should('have.css', "border-color", borderColor);
        cy.get(cssLocator).should('have.css', "border-width", borderWidth);
        cy.get(cssLocator).should('have.css', "background-color", backgroundColor);
        cy.get(cssLocator).should('have.css', "height", height);
        cy.get(cssLocator).should('have.css', "width", width);
    }

}
export default helperBase