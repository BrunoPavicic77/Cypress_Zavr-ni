describe("Testira funkcionalnost kliznog kataloga",()=>{

    it("Otvara main page",()=>{

        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain","automationpractice.com");
    })

    it("Testira tipku u desno i lijevo na kliznom katalogu",()=>{

        cy.xpath("//a[@class='bx-next']").click();
        cy.xpath("//a[@class='bx-next']").click();
        cy.xpath("//a[@class='bx-next']").click();
        cy.xpath("//a[@class='bx-prev']").click();
        cy.xpath("//a[@class='bx-prev']").click();
        cy.xpath("//a[@class='bx-prev']").click();
        cy.xpath("//a[@class='bx-next']").click();
        cy.xpath("//a[@class='bx-prev']").click();
        
    })
})    