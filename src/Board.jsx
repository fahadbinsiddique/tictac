import { useState } from "react";

const Square = ({ value, onSquarClick }) => {
  return (
    <button
      className="bg-white border cursor-pointer border-gray-400 font-bold text-black h-12 w-12 m-1 leading-9 text-lg"
      onClick={onSquarClick}
    >
      {value}
    </button>
  );
};

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  console.log(winner);
  
  let status;


  if (winner) {
    status = `Winner:${winner}`;
  } else {
    status = "Next Player " +  (xIsNext ? "X" : "Y");
  }

  function handClick(index) {
    const nextSquares = squares.slice();
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }
  return (
    <>
    <div>{status}</div>
      <div className="flex">
        <Square value={squares[0]} onSquarClick={() => handClick(0)} />
        <Square value={squares[1]} onSquarClick={() => handClick(1)} />
        <Square value={squares[2]} onSquarClick={() => handClick(2)} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquarClick={() => handClick(3)} />
        <Square value={squares[4]} onSquarClick={() => handClick(4)} />
        <Square value={squares[5]} onSquarClick={() => handClick(5)} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquarClick={() => handClick(6)} />
        <Square value={squares[7]} onSquarClick={() => handClick(7)} />
        <Square value={squares[8]} onSquarClick={() => handClick(8)} />
      </div>
    </>
  );
};

export default Board;

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let index = 0; index < lines.length; index++) {
    const [a, b, c] = lines[index];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
