describe("Tic Tac Toe Game", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
  });

  it("checking the heading of the application", () => {
    const heading = cy.get("h1");
    heading.should("have.text", "Tic Tac Toe");
  });

  it("checking the input tag of the application", () => {
    const input = cy.get("input");
    input.should("have.attr", "type", "number");
  });

  it("checking the reset button is working or not", () => {
    const button = cy.get("button");
    button.should("have.text", "Reset Board");

    cy.get(".reset-button").click();
  });

  it('Displays the initial board value and next player', () => { 
    cy.get(".cell").should('have.length', 9);
    cy.contains('Next Player: X')
  })
    it("resets the board when the reset button is clicked", () => {
      cy.get(".cell").eq(0).click();
      cy.get(".cell").eq(1).click();
      cy.get(".reset-button").click();
      //eq is used select specific index values from array

      cy.get(".cell").each((cell) => {
        cy.wrap(cell).should("be.empty");
      });

      cy.contains("Next Player: X");
    });
  
  it('change size of the board size and rests the board', () => {
    cy.get('.size-input').clear().type('0').blur();
    cy.get('.cell').should('have.length', 9); 

    cy.get('.cell').eq(0).click();
    cy.contains("Next Player: O");

    cy.get('.reset-button').click();
    cy.get('.cell').each(cell => {
      cy.wrap(cell).should('be.empty');
    })
  })

});
