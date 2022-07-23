describe("Testira klik na sve tri kategorije",()=>{

    it("Otvara main page",()=>{

        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain","automationpractice.com");
    })

    it("Testira klik na kategoriju WOMEN",()=>{

        cy.xpath("//a[@class='sf-with-ul']").first().click();
        cy.url().should("contain","id_category=3&controller=category");
    })

    it("Testira klik na kategoriju DRESSES",()=>{

        cy.xpath("//a[@title='Dresses']").first().click({force: true});
        cy.url().should("contain","id_category=8&controller=category");
    })

    it("Testira klik na ketegoriju T-SHIRTS",()=>{

        cy.xpath("//a[@title='T-shirts']").first().click({force: true});
        cy.url().should("contain","id_category=5&controller=category");
    })
})