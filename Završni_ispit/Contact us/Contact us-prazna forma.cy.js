describe("Kreira i šalje jednu praznu Contact us formu",()=>{

    it("Otvara stranicu za kontakt i šalje praznu formu",()=>{
        
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain","automationpractice.com");
        cy.xpath("//div[@id='contact-link']").click();
        cy.url().should("contain","controller=contact");
        cy.xpath("//button[@id='submitMessage']").click();
        cy.xpath("//div[@class='alert alert-danger']").should("exist");
    })
}) 