import React from "react";
import "./App.scss";
import { Navigation } from "./navigation";
import { Lobby, Game } from "../routes";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import { BreakpointProvider } from "react-socks";
import theme from "../theme"
import {ThemeProvider} from "theme-ui";
const App: React.FC<any> = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <BreakpointProvider>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Route exact path="/" component={Lobby} />
          <DefaultLayout exact path="/lobby/:code" component={Lobby} />
          <DefaultLayout exact path="/game/:code" component={Game} />
        </div>
        </ThemeProvider>
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
          <Navigation />
          <Component {...matchProps} />
        </>
      )}
    />
  );
};
export default App;
