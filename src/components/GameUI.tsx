import React from "react";

interface Props {
  generation: number;
  isSimulating: boolean;
  toggleIsSimulating: () => void;
  resetSimulation: () => void;
  clearSimulation: () => void;
}

const GameUI: React.FC<Props> = ({
  generation,
  isSimulating,
  toggleIsSimulating,
  resetSimulation,
  clearSimulation,
}) => {
  return (
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
  );
};

export default GameUI;
