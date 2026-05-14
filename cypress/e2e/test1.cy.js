describe('log in info' , () => {
it('check credentials' , () => {
cy.visit('https://advantageonlineshopping.com/#/register')
cy.get('[name="usernameRegisterPage"]').type('abdelrhman yousry')
cy.get('[name="emailRegisterPage"]').type('abdelrhman@gmail.com')
cy.get('[name="passwordRegisterPage"]').type('0123456789')
cy.get('[a-hint="Confirm password"] > .inputContainer > label').type('0123456789')
cy.get('#register_btn').click()




})


})