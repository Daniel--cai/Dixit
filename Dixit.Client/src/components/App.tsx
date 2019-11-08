import React from "react";
import "./App.scss";
import { TopMenu } from "./top-menu";
import { Lobby, Game } from "../routes";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import { BreakpointProvider } from "react-socks";
const App: React.FC<any> = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <BreakpointProvider>
        <div className="app">
          <Route exact path="/" component={Lobby} />
          <DefaultLayout exact path="/lobby/:code" component={Lobby} />
          <DefaultLayout exact path="/game/:code" component={Game} />
        </div>
      </BreakpointProvider>
    </ConnectedRouter>
  );
};

const DefaultLayout: React.FC<any> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <>
          <TopMenu />
          <Component {...matchProps} />
        </>
      )}
    />
  );
};
export default App;
