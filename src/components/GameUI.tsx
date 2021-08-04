import React, { useState } from "react";

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
  width,
  height,
  onWidthChange,
  onHeightChange,
}: Props) => {
  const [localWidth, setLocalWidth] = useState(width);
  const [localHeight, setLocalHeight] = useState(height);

  const setWidthIfValid = (value: number) => {
    if (value > 0 && value <= 100) {
      setLocalWidth(value);
    }
  };

  const setHeightIfValid = (value: number) => {
    if (value > 0 && value <= 100) {
      setLocalHeight(value);
    }
  };

  const submitSizeChange = () => {
    resetSimulation();
    onWidthChange(localWidth);
    onHeightChange(localHeight);
  };

  return (
    <div className="game-controls">
      <div className="game-inputs">
        <div className="input-label">Width:</div>
        <input
          className="input-field"
          type="number"
          min={1}
          max={100}
          defaultValue={localWidth}
          onChange={(e) => setWidthIfValid(e.target.valueAsNumber)}
        />
        <div className="input-label">Height:</div>
        <input
          className="input-field"
          type="number"
          min={1}
          max={100}
          value={localHeight}
          onChange={(e) => setHeightIfValid(e.target.valueAsNumber)}
        />
        <button className="small-game-button" onClick={submitSizeChange}>
          Update size
        </button>
      </div>
      <div className="game-buttons">
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

export default GameUI;
