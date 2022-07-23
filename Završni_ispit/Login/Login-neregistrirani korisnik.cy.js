describe("Login korisnika s nepostojećim korisničkim računom",()=>{

    it("Otvara stranicu za login",()=>{

        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain","automationpractice.com");
        cy.xpath("//div[@class='header_user_info']").click();
    })

    it("Upisuje neispravne korisničke podatke te vrši funkciju login",()=>{

        cy.xpath("//input[@id='email']").click().type("wowowoowowoow@gmail.com");
        cy.xpath("//input[@id='passwd']").click().type("nopppp123");
        cy.xpath("//button[@id='SubmitLogin']").click();
        cy.xpath("//div[@class='alert alert-danger']").should("contain.text","Authentication failed.");

    })
})