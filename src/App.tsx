import React from "react";
import "./App.css";
import Game from "./Game";

const App: React.FC = () => {
  return (
    <div className="app">
      <Game startWidth={20} startHeight={20} />
    </div>
  );
};

export default App;
