describe("Testira klik na ketegorije popular i best seller",()=>{

    it("Otvara main page",()=>{

        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain","automationpractice.com");
    })

    it("Klik na best sellers",()=>{

        cy.xpath("//a[@class='blockbestsellers']").click();
    })

    it("Klik na Popular",()=>{

        cy.xpath("//a[@class='homefeatured']").click();
    })

    

})    