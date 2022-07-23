describe("Kreira korisnički račun s već postojećom emmail adresom",()=>{

    it("Testira vraća li stranica error za već korišten email",()=>{

        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain","automationpractice.com");
        cy.xpath("//div[@class='header_user_info']").click();
        cy.xpath("//input[@id='email_create']").type("noj123@gmail.com");
        cy.xpath("//div[@class='submit']").click();
        cy.xpath("//div[@class='alert alert-danger']").should("contain.text","An account using this email address has already been registered. Please enter a valid password or request a new one.");
        
    })

})