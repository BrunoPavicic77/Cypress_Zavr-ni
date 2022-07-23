let ime = (Math.random() + 1).toString(36).substring(9);
let sx = "@gmail.com";
let gmail = ime + sx;


describe("Kreira korisnički račun s brojevima u imenu i prezimenu",()=>{

    it("Otvara stranicu sa formom za registraciju novog korisnika",()=>{
        
        cy.visit("http://automationpractice.com/index.php");
        cy.url().should("contain","automationpractice.com");
        cy.xpath("//div[@class='header_user_info']").click();
        cy.xpath("//input[@id='email_create']").type(gmail);
        cy.xpath("//div[@class='submit']").click();
    })

    it("Unosi podatke o korisniku s krivim imenom i prezimenom",()=>{
        
        cy.url().should("contain","account-creation");
        cy.xpath("//input[@id='id_gender1']").click();
        cy.xpath("//input[@id='customer_firstname']").click().type("1278");
        cy.xpath("//input[@id='customer_lastname']").click().type("1312");
        cy.xpath("//input[@id='passwd']").click().type("12345");
        cy.xpath("//select[@id='days']").select(7);
        cy.xpath("//select[@id='months']").select(7);
        cy.xpath("//select[@id='years']").select('1988');
        cy.xpath("//input[@id='company']").click().type("Vuvuzela");
        cy.xpath("//input[@id='address1']").click().type("Trg Stevice Kralja");
        cy.xpath("//input[@id='city']").click().type("Zagreb");
        cy.xpath("//input[@id='address1']").click().type("Trg Stevice Kralja");
        cy.xpath("//select[@id='id_state']").select(5);
        cy.xpath("//input[@id='postcode']").click().type("00000");
        cy.xpath("//textarea[@id='other']").click().type("gigibigule");
        cy.xpath("//input[@id='phone']").click().type("123456");
        cy.xpath("//input[@id='phone_mobile']").click().type("123456");
        cy.xpath("//button[@id='submitAccount']").click();
        cy.xpath("//div[@class='alert alert-danger']").should("contain.text","is invalid");

    })
})