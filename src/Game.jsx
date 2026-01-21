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

const Board = ({ xIsNext, squares, onPlay }) => {
  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = `Winner:${winner}`;
  } else {
    status = "Next Player " + (xIsNext ? "X" : "Y");
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

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);

  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {
    setXIsNext(!xIsNext);
    setHistory([...history, nextSquares]);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go To The move # ${move}`;
    } else {
      description = `Go To Start the Game`;
    }
    return (
      <li key={move}>
        <button>{description}</button>
      </li>
    );
  });

  return (
    <div>
      <div>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div>
        <ol>{moves}</ol>
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
