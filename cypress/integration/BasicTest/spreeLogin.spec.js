 ///<reference types="cypress" />

     describe("Test Spree Application",()=>{

         before("Perform login",()=>{
             cy.visit("/",{retryOnStatusCodeFailure:true});
             cy.fixture("product").as("listOfProduct")
             cy.login();
         })
         it("Verify Search Product Functionality",()=>{
             cy.get("@listOfProduct").then((product)=>{
                 cy.get('#keywords').type(product.product1);
                 cy.get('.btn').click();
                 cy.get('#product_1 > .panel > .panel-body > a > .info').should('have.text',product.product1);
             })

         })
     })