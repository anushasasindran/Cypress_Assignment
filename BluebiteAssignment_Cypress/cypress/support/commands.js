
import FormPage from '../e2e/POM/formPage';
Cypress.Commands.add('fillFormData', (name, email, age, reason) => {
  const formPage = new FormPage();
  formPage.fillName(name);
  formPage.fillEmail(email);
  formPage.fillAge(age);
  formPage.fillReason(reason);
  formPage.submit();
});

Cypress.Commands.add('getCountFromLocalStorage', () => {
  cy.window().then((win) => {
    const localStorageItem = win.localStorage.getItem('BB_STUDIO_VARS-bluebite:es:04425f7c-4fdd-47f6-85b3-b800d12bb9ca');
    if (localStorageItem) {
      const parsedItem = JSON.parse(localStorageItem);
      return parseInt(parsedItem.count);
    }
    else {
      return null;
    }
  });
});


Cypress.Commands.add('setCountInLocalStorage', (count) => {
  cy.window().then((win) => {
    win.localStorage.setItem('BB_STUDIO_VARS-bluebite:es:04425f7c-4fdd-47f6-85b3-b800d12bb9ca',
      JSON.stringify({
        isOfAge: true,
        count: count
      }));
  });
})

Cypress.Commands.add('deleteCountInLocalStorage', () => {
  cy.window().then((win) => {
    win.localStorage.removeItem('BB_STUDIO_VARS-bluebite:es:04425f7c-4fdd-47f6-85b3-b800d12bb9ca');
  });
});

