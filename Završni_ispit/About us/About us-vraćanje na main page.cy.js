describe("Odlazi na About us stranicu te se vraća na main page",()=>{

    it("Otvara stranicu About us",()=>{
        
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain","automationpractice.com");
        cy.xpath("//a[@title='About us']").click();
        cy.url().should("contain","automationpractice.com/index.php?id_cms=4&controller=cms");
    })

    it("Vraća se na main page",()=>{

        cy.xpath("//i[@class='icon-home']").click();
        cy.url().should("contain","automationpractice.com");
    })
})