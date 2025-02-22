Initialize the Board and Game State

The Game component initializes the board to a 3x3 grid and sets the first player to 'X'.
The useEffect hook reinitializes the board when the size changes.
Create Empty Board

The createEmptyBoard function creates a 2D array filled with null, representing an empty board.
Handle Cell Clicks

The handleClick function updates the board state when a cell is clicked, and toggles the current player.
Calculate Winner

The calculateWinner function checks all rows, columns, and diagonals for a winning line of identical non-null values.
Change Board Size

The handleSizeChange function updates the board size based on user input, ensuring a minimum size of 3x3.
Reset Board

The resetBoard function resets the board to its initial empty state and sets the next player to 'X'.
Render the Board

The Board component renders the grid and cells, applying the correct styles and handling cell clicks.
