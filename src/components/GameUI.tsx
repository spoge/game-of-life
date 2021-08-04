import React from "react";
import "./styles/GameUI.scss";

interface Props {
  isSimulating: boolean;
  toggleIsSimulating: () => void;
  resetSimulation: () => void;
  clearSimulation: () => void;
  width: number;
  height: number;
  onWidthChange: (value: number) => void;
  onHeightChange: (value: number) => void;
}

const GameUI = ({
  isSimulating,
  toggleIsSimulating,
  resetSimulation,
  clearSimulation,
}: Props) => {
  return (
    <div className="game-controls">
      <button className="game-button no-select" onClick={toggleIsSimulating}>
        {isSimulating ? "Pause" : "Play"}
      </button>
      <button className="game-button no-select" onClick={resetSimulation}>
        Reset
      </button>
      <button className="game-button no-select" onClick={clearSimulation}>
        Clear
      </button>
    </div>
  );
};

export default GameUI;
