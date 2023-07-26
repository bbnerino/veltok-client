describe("login", () => {
  it("should be able to login", () => {
    cy.visit("/login");

    cy.get("[placeholder=E-mail]").as("idInput");
    cy.get("@idInput").type("bbnerino@gmail.com");

    cy.get("[placeholder=Password]").as("passwordInput");
    cy.get("@passwordInput").type("qwer1234");

    cy.get("[placeholder=E-mail]")
      .invoke("val")
      .should("eq", "bbnerino@gmail.com");
    cy.get("[placeholder=Password]").invoke("val").should("eq", "qwer1234");

    // login-button dom 요소가 존재하는지 확인 후 클릭 이벤트 발생
    cy.contains("Log In").should("exist").click();
    //  페이지가 /페이지로 이동되었는지 검증
    cy.url().should("eq", "http://localhost:3000/");
  });
});
