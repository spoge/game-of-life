import React, { useState, useEffect, useCallback } from "react";
import GameBoard from "./components/GameBoard";
import GameUI from "./components/GameUI";
import { nextGenerationCells } from "./utils/GameUtil";
import arrayFromTo from "./utils/ArrayUtil";
import GameHeader from "./components/GameHeader";

interface Props {
  startWidth: number;
  startHeight: number;
}

const Game = ({ startWidth, startHeight }: Props) => {
  const [width, setWidth] = useState(startWidth);
  const [height, setHeight] = useState(startHeight);

  const [startCells, setStartCells] = useState<boolean[][]>(
    arrayFromTo(width, height)
  );
  const [cells, setCells] = useState<boolean[][]>(startCells);
  const [generation, setGeneration] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);
  //const [interval, setInterval] = useState(500);
  const interval = 500;

  const simulateGeneration = useCallback(() => {
    setCells(nextGenerationCells);
    setGeneration(generation + 1);
  }, [generation]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isSimulating) {
        simulateGeneration();
      }
    }, interval);
    return () => clearTimeout(timer);
  }, [isSimulating, interval, simulateGeneration]);

  useEffect(() => {
    if (width < 1 || height < 1) {
      setWidth(startWidth);
      setHeight(startHeight);
      return;
    }

    let newStartCells = arrayFromTo(width, height).map((row, width) =>
      row.map((cell, height) =>
        startCells.length > height &&
        startCells[height].length > width &&
        startCells[width] !== undefined
          ? startCells[width][height]
          : cell
      )
    );

    setStartCells(newStartCells);
    setCells(newStartCells);
    return () => {};
    // eslint-disable-next-line
  }, [height, width, startHeight, startWidth]);

  const resetSimulation = () => {
    setIsSimulating(false);
    setGeneration(1);
    setCells(startCells);
  };

  const clearSimulation = () => {
    setIsSimulating(false);
    setGeneration(1);
    let newCells = arrayFromTo(width, height);
    setCells(newCells);
    setStartCells(newCells);
  };

  const onWidthChange = (value: number) => {
    setWidth(value);
  };

  const onHeightChange = (value: number) => {
    setHeight(value);
  };

  return (
    <div className="game">
      <GameHeader generation={generation} />
      <GameBoard
        generation={generation}
        cells={cells}
        setCells={setCells}
        setStartCells={setStartCells}
      />
      <GameUI
        isSimulating={isSimulating}
        toggleIsSimulating={() => setIsSimulating(!isSimulating)}
        resetSimulation={resetSimulation}
        clearSimulation={clearSimulation}
        width={width}
        height={height}
        onWidthChange={onWidthChange}
        onHeightChange={onHeightChange}
      />
    </div>
  );
};

export default Game;
