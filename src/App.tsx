import React from "react";
import Game from "./Game";
import "./styles/App.scss";

const App = () => {
  return (
    <div className="app">
      <Game startWidth={20} startHeight={20} />
    </div>
  );
};

export default App;
