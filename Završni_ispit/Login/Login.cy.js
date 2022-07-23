describe("Login korisnika s postojećim korisničkim računom",()=>{

    it("Otvara stranicu za login",()=>{

        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain","automationpractice.com");
        cy.xpath("//div[@class='header_user_info']").click();
    })

    it("Upisuje ispravne korisničke podatke te vrši funkciju login",()=>{

        cy.xpath("//input[@id='email']").click().type("noj123@gmail.com");
        cy.xpath("//input[@id='passwd']").click().type("nojevici123");
        cy.xpath("//button[@id='SubmitLogin']").click();
        cy.url().should("contain","controller=my-account");

    })
})