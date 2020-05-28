/// <reference types="cypress" />

describe("API Testing demo", () =>{

    it('API Request',()=>{
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            headers: {
              'Content-Type': 'application/json',     
            },
            body: {       
                "username" : "admin",
                "password" : "password123",
            }
          }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
          })
          
    })
})