describe("Testira koristenje search bara",()=>{

    it("Otvara main page",()=>{

        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain","automationpractice.com");
    })

    it("Upisuje u search bar te pretražuje",()=>{

        cy.xpath("//input[@class='search_query form-control ac_input']").click().type("Blouse{enter}");
        cy.url().should("contain","Blouse&submit_search=");

    })
})    