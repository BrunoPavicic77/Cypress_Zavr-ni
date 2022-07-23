describe("Odlazi na About us stranicu",()=>{

    it("Otvara stranicu About us",()=>{
        
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain","automationpractice.com");
        cy.xpath("//a[@title='About us']").click();
        cy.url().should("contain","automationpractice.com/index.php?id_cms=4&controller=cms");
    })
})