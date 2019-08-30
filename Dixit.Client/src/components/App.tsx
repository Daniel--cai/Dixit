import React from "react";
import logo from "../assets/images/logo.svg";
import "./App.scss";
import { SpringFadeIn } from "./spring-fadein";
import { useSignalR } from "../hooks/useSignalR";
const App: React.FC = () => {
  useSignalR();
  return (
    <div className="App">
      <header className="App-header">
        {[0, 1, 2, 3, 4, 5].map(_ => (
          <SpringFadeIn key={_}>
            <img src={logo} className="App-logo" alt="logo" />
          </SpringFadeIn>
        ))}

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
