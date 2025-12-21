/*
   Game
    -> Board
        -> Square
    -> Hostory
*/

import { useState } from "react";

const Square = ({ value, onSquarClick }) => {
  const textColor = value === "X" ? "text-blue-600" : "text-rose-500";
  return (
    <button
      className={`bg-gray-50 border-2 border-gray-200 cursor-pointer font-black h-16 w-16 m-1 
      text-2xl rounded-lg shadow-sm transition-all hover:bg-blue-50 hover:border-blue-300 active:scale-90 ${textColor}`}
      onClick={onSquarClick}
    >
      {value}
    </button>
  );
};

const Board = ({ xIsNext, squares, onPlay }) => {
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every((square) => square !== null);

  let status;
  let statusClass = "mb-4 font-bold text-xl ";
  if (winner) {
    status = `Winner:${winner}`;
    statusClass += "text-green-600";
  } else if (isDraw) {
    status = "Game Draw!";
    statusClass += "text-orange-500";
  } else {
    status = "Next Player " + (xIsNext ? "X" : "Y");
    statusClass += "text-gray-700";
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
    onPlay(nextSquares);
  }
  return (
    <>
      <div className={statusClass}>{status}</div>
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

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(move) {
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go To The move # ${move}`;
    } else {
      description = move > 0 ? `Go to move #${move}` : "Reset / Start Game";
    }
    return (
      <li key={move} className="bg-gray-700 text-white mb-1 p-1 rounded-sm">
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="flex justify-center p-4">
      <div className="mr-16">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <ol className="border border-gray-400 p-1 text-lg">{moves}</ol>
      </div>
    </div>
  );
};

export default Game;

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
