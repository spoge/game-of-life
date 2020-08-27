import React from "react";
import "./App.css";
import Game from "./Game";

const App: React.FC = () => {
  return (
    <div className="app">
      <Game width={40} height={40} />
    </div>
  );
};

export default App;
