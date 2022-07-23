describe("Testiranje Forgot your password funkcije",()=>{

    it("Otvara stranicu za login",()=>{

        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain","automationpractice.com");
        cy.xpath("//div[@class='header_user_info']").click();
    })

    it("Testira Forgot your password funkciju",()=>{

        cy.xpath("//a[@href='http://automationpractice.com/index.php?controller=password']").click();
        cy.url().should("contain","controller=password");
        cy.xpath("//input[@id='email']").click().type("noj123@gmail.com");
        cy.xpath("//button[@class='btn btn-default button button-medium']").click();
        cy.xpath("//p[@class='alert alert-success']").should("exist");
    })
})    