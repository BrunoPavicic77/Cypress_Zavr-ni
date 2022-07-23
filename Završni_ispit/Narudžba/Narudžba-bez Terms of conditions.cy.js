describe("Testira proces narudžbe jednog proizvoda bez prihvaćanja Terms and conditions",()=>{

    it("Otvara main page",()=>{

        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain","automationpractice.com");
    })

    it("Otvara kategoriju WOMEN",()=>{

        cy.xpath("//a[@class='sf-with-ul']").first().click();
        cy.url().should("contain","id_category=3&controller=category");
    })

    it("Stavlja proizvod u košaricu te prolazi kroz proces kupnje",()=>{

        cy.xpath("//a[@title='Blouse']").first().click();
        
        cy.url().should("contain","id_product=2&controller=product");
        
        cy.xpath("//button[@class='exclusive']").click();
        cy.wait(15000)
        cy.xpath("//a[@class='btn btn-default button button-medium']").click();
       
        cy.url().should("contain","controller=order");
       
        cy.xpath("//a[@class='button btn btn-default standard-checkout button-medium']").click();
        
        cy.url().should("contain","display_guest_checkout=0&back=http%3A%2F%2Fautomationpractice.com%2Findex.php%3Fcontroller%3Dorder%26step%3D1%26multi-shipping%3D0");
        
        cy.xpath("//input[@id='email']").click().type("noj123@gmail.com");
        cy.xpath("//input[@id='passwd']").click().type("nojevici123");
        cy.xpath("//button[@id='SubmitLogin']").click();

        cy.url().should("contain","controller=order&step=1&multi-shipping=0");

        cy.xpath("//button[@class='button btn btn-default button-medium']").click();
        cy.xpath("//button[@class='button btn btn-default standard-checkout button-medium']").click();
        cy.wait(5000)
        cy.xpath("//p[@class='fancybox-error']").should("exist");
       
    })
})    