steps-in-progress

step-1

- create a board component with div className='board' and button 

step-2 

- create a game component and import the board component. 

- import the game component in App.js and render it in the App component. 

step-3

- create a useState function as [size, setSize] = useState(3)

- create an createEmptyBoard with size input as props and return the value as Array.from({length: size}, () => Array(size).fill(null))

- create a useState function as [board, setBoard] = useState(createEmptyBoard(size))

- create a resetBoard function that set the value of board to createEmptyBoard(size)

- create a useState function as user-Name as x in state. [xIsNext, setXIsNext] = useState(true)

- create a renderBoard function that takes a board as props and return a div with className='board-row' and a button for each element in the board.

- create a handleClick function that takes a row and col as props and check the values 
        if(board[row][col] || calculateWinner(board)) return
        create a function as newBoard and map the board with row and make slice function.
          const newBoard = board.map((row) => row.slice());

        In this we check the user is x or o from the board map function assign to newBoard from the [row] [col]  

         set the value of board to newBoard
        newBoard[row][col] = xIsNext ? "X" : "O";

        set the value of newBoard to the setBoard
       
         setBoard(newBoard);

         set the value of user is x or not xIsNext to the setXIsNext
         setXIsNext(!xIsNext);

- create a currentPlayer and use or operator to check the user is x or o from the xIsNext value from the state
            const currentPlayer = xIsNext ? "X" : "O";

step-4 

- create a winner function and assign a calculateWinner function and pass the value of board as props.
                const winner = calculateWinner(board);

- create a calculateWinner function and pass the props value as board to the function.
        in this there is a size function to check the length of the board.
             const size = board.length;
        in there is line function and it is an empty array.
                const lines = [];
        






#   T i c - T a c - t o e _ C e l l _ s i z e _ a c c o r d i n g _ i n p u t V a l u e  
 