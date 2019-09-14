import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./components/App";
import { history, configureStore } from "./store";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";

const store = configureStore();

const renderApp = () =>
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <App history={history} />
      </Provider>
    </AppContainer>,
    document.getElementById("root")
  );

if (process.env.NODE_ENV !== "production" && module.hot) {
  module.hot.accept("./components/App", renderApp);
}
renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
