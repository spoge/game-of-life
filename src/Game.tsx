import React, { useState, useEffect } from "react";
import GameBoard from "./components/GameBoard";
import GameUI from "./components/GameUI";
import { nextGenerationPositions } from "./utils/GameUtil";
import arrayFromTo from "./utils/ArrayUtil";

interface Props {
  width: number;
  height: number;
}

const Game: React.FC<Props> = ({ width, height }) => {
  const [startPositions, setStartPositions] = useState<boolean[][]>(
    arrayFromTo(width, height)
  );
  const [positions, setPositions] = useState<boolean[][]>(startPositions);
  const [generation, setGeneration] = useState(1);
  const [isSimulating, setIsSimulating] = useState(false);
  const [interval, setInterval] = useState(500);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isSimulating) {
        simulateGeneration();
        setGeneration(generation + 1);
      }
    }, interval);
    return () => clearTimeout(timer);
  }, [generation, isSimulating, interval]);

  const simulateGeneration = () => {
    setPositions(nextGenerationPositions);
    setGeneration(generation + 1);
  };

  const resetSimulation = () => {
    setIsSimulating(false);
    setGeneration(1);
    setPositions(startPositions);
  };

  const clearSimulation = () => {
    setIsSimulating(false);
    setGeneration(1);
    let newPositions = arrayFromTo(width, height);
    setPositions(newPositions);
    setStartPositions(newPositions);
  };

  return (
    <div className="game">
      <GameBoard
        generation={generation}
        positions={positions}
        setPositions={setPositions}
        setStartPositions={setStartPositions}
      />
      <GameUI
        generation={generation}
        isSimulating={isSimulating}
        toggleIsSimulating={() => setIsSimulating(!isSimulating)}
        resetSimulation={resetSimulation}
        clearSimulation={clearSimulation}
      />
    </div>
  );
};

export default Game;
