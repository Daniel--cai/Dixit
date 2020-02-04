import React, { PropsWithChildren } from "react";
import "./App.scss";
import { Navigation } from "./navigation";
import { Lobby, Game, Screen, GameScreen } from "../routes";
import { ConnectedRouter } from "connected-react-router";
import { Route } from "react-router";
import theme from "../theme"
import { ThemeProvider } from "theme-ui";
import { RouteComponentProps, RouteProps } from "react-router-dom";
import { StaticContext } from 'react-router';
import { DefaultLayout, FullScreenLayout } from "../layouts"

const App: React.FC<any> = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      <ThemeProvider theme={theme}>
        <div className="app">
          <Route exact path="/" component={Screen} />
          <RouteWithLayout exact path="/screen/:code" component={Screen} layout={FullScreenLayout} />
          <RouteWithLayout exact path="/screen/:code/game" component={GameScreen} layout={FullScreenLayout} />
          <RouteWithLayout exact path="/lobby/:code" component={Lobby} layout={DefaultLayout} />
          <RouteWithLayout exact path="/game/:code" component={Game} layout={DefaultLayout} />
        </div>
      </ThemeProvider>
    </ConnectedRouter>
  );
};

interface RouteWithLayoutProps extends Partial<RouteProps> {
  component: React.FunctionComponent<
    RouteComponentProps<{ code: string }, StaticContext, any>
  >;
  layout: React.FunctionComponent;
}


const RouteWithLayout: React.FC<RouteWithLayoutProps> = ({ component: Component, layout: Layout, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Component {...matchProps} />
        </Layout>
      )}
    />
  );
};
export default App;
