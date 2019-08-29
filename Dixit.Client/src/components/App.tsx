import React from "react";
import logo from "../assets/images/logo.svg";
import "./App.scss";
import { SpringFadeIn } from "./spring-fadein";
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        {Array(5)
          .fill("")
          .map(_ => (
            <SpringFadeIn>
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
