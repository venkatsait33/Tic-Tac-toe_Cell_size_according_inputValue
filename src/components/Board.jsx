import React from "react";

const Board = ({ board, onClick }) => {
      const gridStyle = {
        gridTemplateRows: `repeat(${board.length}, 1fr)`,
        gridTemplateColumns: `repeat(${board.length}, 1fr)`,
      };
  return (
    <div className="board" style={gridStyle}>
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <button
            key={`${rowIndex}-${colIndex}`}
            className="cell"
            onClick={() => onClick(rowIndex, colIndex)}
          >
            {cell}
          </button>
        ))
      )}
    </div>
  );
};

export default Board;
