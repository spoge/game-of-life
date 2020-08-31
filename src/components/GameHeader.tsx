import React from "react";

interface Props {
  generation: number;
}

const GameHeader: React.FC<Props> = ({ generation }) => {
  return (
    <div className="upper-ui">
      <button
        className="back-button"
        onClick={() => window.location.assign(window.location.origin)}
      >
        {"< Back"}
      </button>
      <div className="game-label">Generation: {generation}</div>
    </div>
  );
};

export default GameHeader;
