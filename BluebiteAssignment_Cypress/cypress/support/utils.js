export function getRandomCount() {
  const randomCount = Math.floor(Math.random() * 100) + 1;
  cy.log(randomCount)
  return randomCount
}