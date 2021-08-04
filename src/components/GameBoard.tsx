import React, { Dispatch, SetStateAction } from "react";
import Cell from "./Cell";
import "./styles/GameBoard.scss";

interface Props {
  generation: number;
  cells: boolean[][];
  setCells: Dispatch<SetStateAction<boolean[][]>>;
  setStartCells: Dispatch<SetStateAction<boolean[][]>>;
}

const GameBoard = ({ generation, cells, setCells, setStartCells }: Props) => {
  const toggleCell = (
    setter: Dispatch<SetStateAction<boolean[][]>>,
    row: number,
    column: number
  ) => {
    let newCells = cells.map((cellRow, i) =>
      cellRow.map((cellIsAlive, j) => {
        if (i === row && j === column) return !cellIsAlive;
        return cellIsAlive;
      })
    );
    setter(newCells);
    if (setter === setStartCells) {
      setCells(newCells);
    }
  };

  return (
    <div className="board">
      {[
        ...cells.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {[
              ...row.map((alive, columnIndex) => (
                <Cell
                  onClick={() => {
                    if (generation === 1) {
                      toggleCell(setStartCells, rowIndex, columnIndex);
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
  );
};

export default GameBoard;
