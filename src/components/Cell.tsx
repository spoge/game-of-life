import React from "react";
import "./styles/Cell.scss";

interface Props {
  alive?: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Cell = ({ onClick, alive = false }: Props) => {
  return (
    <div className={`cell ${alive ? "alive" : "dead"}`} onClick={onClick}></div>
  );
};

export default Cell;
