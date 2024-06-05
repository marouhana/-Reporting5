describe('Uploader et télécharger des images', () => {
    before(() => {
      cy.visit('https://imgur.com/upload');
    });
  
    it("Upload d image", () => {
      cy.get('#file-input').attachFile("../fixtures/kq69_b47t_220829.jpg");
      cy.wait(4000);
      //cy.contains("Download post").click();
      cy.get(".ToastContainer").contains("Complete");
    });
  })

