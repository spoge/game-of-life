import React from "react";

interface Props {
  alive?: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Cell: React.FC<Props> = ({ onClick, alive = false }) => {
  return (
    <div className={`cell ${alive ? "alive" : "dead"}`} onClick={onClick}></div>
  );
};

export default Cell;
