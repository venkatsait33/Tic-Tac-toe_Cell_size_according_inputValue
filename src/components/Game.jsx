import React, { useState, useEffect } from "react";
import Board from "./Board";

function Game() {
  const [size, setSize] = useState(3); // Initial board size is 3x3

  // Function to create an empty board of the given size
  const createEmptyBoard = (size) => {
    return Array.from({ length: size }, () => Array(size).fill(null));
  };
  const [board, setBoard] = useState(createEmptyBoard(3)); // Create an empty 3x3 board
  const [xIsNext, setXIsNext] = useState(true); // Start with player 'X'

  // Recreate the board when the size changes
  useEffect(() => {
    setBoard(createEmptyBoard(size));
  }, [size]);

  // Function to handle a cell click
  const handleClick = (row, col) => {
    if (board[row][col] || calculateWinner(board)) return;

    const newBoard = board.map((row) => row.slice());
    newBoard[row][col] = xIsNext ? "X" : "O";
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  };

  // Function to calculate the winner
  const calculateWinner = (board) => {
    const size = board.length;
    const lines = [];

    // Rows
    for (let row = 0; row < size; row++) {
      lines.push(board[row]);
    }

    // Columns
    for (let col = 0; col < size; col++) {
      lines.push(board.map((row) => row[col]));
    }

    // Diagonals
    lines.push(board.map((row, idx) => board[idx][idx]));
    lines.push(board.map((row, idx) => board[idx][size - 1 - idx]));

    // Check each line for a winner
    for (let line of lines) {
      if (line.every((cell) => cell && cell === line[0])) {
        return line[0];
      }
    }
    //The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

    return null;
  };

  // Function to handle the size change
  const handleSizeChange = (e) => {
    const newSize = Math.max(3, parseInt(e.target.value) || 3);
    setSize(newSize);
  };

  // Function to reset the board
  const resetBoard = () => {
    setBoard(createEmptyBoard(size));
      setXIsNext(true);
      setSize(3)
  };

  const winner = calculateWinner(board);
  const currentPlayer = xIsNext ? "X" : "O";

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <div className="game-controls">
        <input
          type="number"
          value={size}
          onChange={handleSizeChange}
          min="3"
          className="size-input"
        />
        <button onClick={resetBoard} className="reset-button">
          Reset Board
        </button>
      </div>
      <div className="game-info">
        {winner ? `Winner: ${winner}` : `Next Player: ${currentPlayer}`}
      </div>
      <Board board={board} onClick={handleClick} />
    </div>
  );
}

export default Game;
