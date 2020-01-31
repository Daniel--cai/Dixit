import React from "react";
import "./App.scss";
import { Navigation } from "./navigation";
import { Lobby, Game, Screen } from "../routes";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import theme from "../theme"
import {ThemeProvider} from "theme-ui";
const App: React.FC<any> = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Route exact path="/" component={Screen} />
          <Route exact path="/screen/:code" component={Screen} />
          <DefaultLayout exact path="/lobby/:code" component={Lobby} />
          <DefaultLayout exact path="/game/:code" component={Game} />
        </div>
        </ThemeProvider>
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
