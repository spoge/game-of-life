import React from "react";
import "./styles/GameHeader.scss";

interface Props {
  generation: number;
}

const GameHeader = ({ generation }: Props) => {
  return (
    <div className="game-header">
      <div className="game-label">Conway's Game of Life</div>
      <div className="game-label">Generation: {generation}</div>
    </div>
  );
};

export default GameHeader;
