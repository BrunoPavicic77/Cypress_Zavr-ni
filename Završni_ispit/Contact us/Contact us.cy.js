describe("Kreira i šalje jednu ispunjenu Contact us formu",()=>{

    it("Otvara stranicu za kontakt",()=>{
        
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain","automationpractice.com");
        cy.xpath("//div[@id='contact-link']").click();
        cy.url().should("contain","controller=contact");
    })

    it("Ispunjava i šalje formu",()=>{

        cy.xpath("//select[@id='id_contact']").select(2);
        cy.xpath("//input[@id='email']").click().type("pikachu@gmail.com");
        cy.xpath("//input[@id='id_order']").click().type("456");
        cy.xpath("//textarea[@id='message']").click().type("tridvajedanjedandvatri");
        cy.xpath("//button[@id='submitMessage']").click();
        cy.xpath("//p[@class='alert alert-success']").should("exist");
        //Iz nekog razloga prilikom testiranja svaki put baci grešku, a na isti način sam 
        //formu (sa istim mailom,porukom itd.) ispunio manualno i test prolazi. Međutim
        //otkrio sam da kada se ponovno stisne na tipku submit forma prođe stoga evo 
        //komentirani kod za prolazak testa
        //cy.xpath("//button[@id='submitMessage']").click();
        //cy.xpath("//p[@class='alert alert-success']").should("exist");
    })
})        