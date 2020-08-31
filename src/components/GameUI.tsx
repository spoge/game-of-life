import React, { ChangeEvent } from "react";

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

const GameUI: React.FC<Props> = ({
  isSimulating,
  toggleIsSimulating,
  resetSimulation,
  clearSimulation,
  width,
  height,
  onWidthChange,
  onHeightChange,
}) => {
  return (
    <div className="game-ui">
      {/*<div className="game-inputs">
        <div className="input-label">Width:</div>
        <input
          className="input-field"
          type="number"
          defaultValue={width}
          onChange={(e) => onWidthChange(e.target.valueAsNumber)}
        />
        <div className="input-label">Height:</div>
        <input
          className="input-field"
          type="number"
          defaultValue={height}
          onChange={(e) => onHeightChange(e.target.valueAsNumber)}
        />
      </div>
  */}
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
