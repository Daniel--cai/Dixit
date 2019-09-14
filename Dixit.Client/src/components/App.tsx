import React from "react";
import "./App.scss";
import { TopMenu } from "./top-menu";
import { Lobby, Game } from "../routes";
import { ConnectedRouter } from "connected-react-router";
import { configureStore } from "../store";
import { Route } from "react-router";

const App: React.FC<any> = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <div className="app">
        <TopMenu />
        <Route exact path="/" component={Lobby} />
        <Route exact path="/game/:code" component={Game} />
      </div>
    </ConnectedRouter>
  );
};

export default App;
