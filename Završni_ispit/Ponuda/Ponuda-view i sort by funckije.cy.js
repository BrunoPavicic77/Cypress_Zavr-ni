describe("Testira view i sort by funkciju unutar WOMEN kategorije",()=>{

    it("Otvara main page",()=>{

        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain","automationpractice.com");
    })

    it("Otvara kategoriju WOMEN",()=>{

        cy.xpath("//a[@class='sf-with-ul']").first().click();
        cy.url().should("contain","id_category=3&controller=category");
    })

    it("Testira promjenu view-a proizvoda",()=>{

        cy.xpath("//i[@class='icon-th-list']").click();
        cy.xpath("//li[@id='list']").should("contain.class","selected");
    })

    it("Testira sort by funkciju",()=>{

        cy.xpath("//select[@id='selectProductSort']").select('quantity:desc');
        //Nisam mogao naći ništa specifično kada se sortira u bilo koji filter u kodu stranice
        //da bi mogao dokazat da se sortiralo
    })
})    