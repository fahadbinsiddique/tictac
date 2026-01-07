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

  function handClick(index) {
    const nextSquares = squares.slice();
     if (squares[index]) {
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

 
