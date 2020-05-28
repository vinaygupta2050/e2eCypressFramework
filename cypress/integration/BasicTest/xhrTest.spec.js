/// <reference types="cypress" />

describe("XHR Testing Demo", () =>{

    it("XHR calls",()=>{
            cy.server();
            cy.route('GET','https://www.w3schools.com/xml/gethint.php?q=d').as('name');
            cy.visit('https://www.w3schools.com/xml/xml_http.asp');
            cy.get('#txt1').type('d');
            cy.wait('@name').should('have.property','status',200);
            cy.get('@name').should('have.property','response').and('have.property','body','Diana, Doris');
            cy.get('#txtHint').should('have.text','Diana');
    }),
    it("Mock XHR call response",()=>{
        cy.server();
        //cy.route('GET','**/api/v1/countries','fixtures:country.json');
        cy.route('GET','https://www.w3schools.com/xml/gethint.php?q=d','Vinay').as('name');
        cy.visit("https://www.w3schools.com/xml/xml_http.asp");
        cy.get('#txt1').type("d");
        cy.wait('@name').should('have.property','status',200);
        cy.get('@name').should('have.property','response').and('have.property','body','Vinay');
        cy.get('#txtHint').should('have.text','Vinay');
    })
})