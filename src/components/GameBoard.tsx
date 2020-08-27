import React, { Dispatch, SetStateAction } from "react";
import Cell from "./Cell";

interface Props {
  generation: number;
  positions: boolean[][];
  setPositions: Dispatch<SetStateAction<boolean[][]>>;
  setStartPositions: Dispatch<SetStateAction<boolean[][]>>;
}

const GameBoard: React.FC<Props> = ({
  generation,
  positions,
  setPositions,
  setStartPositions,
}) => {
  const toggleCell = (
    setter: Dispatch<SetStateAction<boolean[][]>>,
    row: number,
    column: number
  ) => {
    let newPositions = positions.map((cellRow, i) =>
      cellRow.map((cellIsAlive, j) => {
        if (i === row && j === column) return !cellIsAlive;
        return cellIsAlive;
      })
    );
    setter(newPositions);
    if (setter === setStartPositions) {
      setPositions(newPositions);
    }
  };

  return (
    <div className="board">
      {[
        ...positions.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {[
              ...row.map((alive, columnIndex) => (
                <Cell
                  onClick={() => {
                    if (generation === 1) {
                      toggleCell(setStartPositions, rowIndex, columnIndex);
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
