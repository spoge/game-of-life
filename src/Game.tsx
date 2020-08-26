import React, { useState, useEffect, Dispatch, SetStateAction } from "react";
import Cell from "./Cell";

interface Props {
  width: number;
  height: number;
}

const Game: React.FC<Props> = ({ width, height }) => {
  const [originalBoard, setOriginalBoard] = useState<boolean[][]>(
    Array.from(Array(width), () => new Array(height).fill(false))
  );

  const [board, setBoard] = useState<boolean[][]>(originalBoard);

  const [generation, setGeneration] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);
  const [interval, setInterval] = useState(500);

  const toggleIsSimulating = () => {
    setIsSimulating(!isSimulating);
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (isSimulating) {
        simulateLife();
        setGeneration(generation + 1);
      }
    }, interval);
    return () => clearTimeout(timer);
  }, [generation, isSimulating]);

  const toggleCell = (
    setter: Dispatch<SetStateAction<boolean[][]>>,
    row: number,
    column: number
  ) => {
    let newBoard = board.map((cellRow, i) =>
      cellRow.map((cellIsAlive, j) => {
        if (i === row && j === column) return !cellIsAlive;
        return cellIsAlive;
      })
    );
    setter(newBoard);
    if (setter === setOriginalBoard) {
      setBoard(newBoard);
    }
  };

  const neighbourCount = (y: number, x: number) => {
    let count = 0;
    let isYOuterEdge = y >= board.length - 1;
    let isXOuterEdge = x >= board.length - 1;
    let isYLowerEdge = y <= 0;
    let isXLowerEdge = x <= 0;

    if (!isYOuterEdge && !isXOuterEdge && board[y + 1][x + 1]) count++;
    if (!isYOuterEdge && board[y + 1][x]) count++;
    if (!isYOuterEdge && !isXLowerEdge && board[y + 1][x - 1]) count++;
    if (!isXOuterEdge && board[y][x + 1]) count++;
    if (!isXLowerEdge && board[y][x - 1]) count++;
    if (!isYLowerEdge && !isXOuterEdge && board[y - 1][x + 1]) count++;
    if (!isYLowerEdge && board[y - 1][x]) count++;
    if (!isYLowerEdge && !isXLowerEdge && board[y - 1][x - 1]) count++;
    return count;
  };

  const simulateLife = () => {
    let newBoardState = board.map((row, y) =>
      row.map((isAlive, x) => {
        let neighbours = neighbourCount(y, x);
        if (isAlive && (neighbours === 2 || neighbours === 3)) {
          return true;
        } else if (!isAlive && neighbours === 3) {
          return true;
        } else {
          return false;
        }
      })
    );

    setBoard(newBoardState);
    setGeneration(generation + 1);
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setBoard(originalBoard);
    setGeneration(1);
  };

  const clearSimulation = () => {
    setIsSimulating(false);
    let newBoard = Array.from(Array(width), () =>
      new Array(height).fill(false)
    );
    setBoard(newBoard);
    setOriginalBoard(newBoard);
    setGeneration(1);
  };

  return (
    <div className="game">
      <div className="board">
        {[
          ...board.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {[
                ...row.map((alive, columnIndex) => (
                  <Cell
                    onClick={() => {
                      if (generation === 1) {
                        toggleCell(setOriginalBoard, rowIndex, columnIndex);
                      }
                    }}
                    key={columnIndex}
                    alive={alive}
                  />
                )),
              ]}
            </div>
          )),
        ]}
      </div>
      <div className="game-ui">
        <div className="game-label">Gen: {generation}</div>
        <button className="game-button" onClick={toggleIsSimulating}>
          {isSimulating ? "Pause" : "Play"}
        </button>
        <button className="game-button" onClick={resetSimulation}>
          Reset
        </button>
        <button className="game-button" onClick={clearSimulation}>
          Clear
        </button>
      </div>
    </div>
  );
};

export default Game;
