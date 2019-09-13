import React from "react";
import "./App.scss";
import { TopMenu } from "./top-menu";
import { Lobby } from "../routes/lobby";
const App: React.FC = () => {
  return (
    <div className="app">
      <TopMenu />
      <Lobby />
    </div>
  );
};

export default App;
