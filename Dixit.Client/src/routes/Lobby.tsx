import React, { useState } from "react";
// import logo from "../assets/images/logo.svg";
import axios from "axios";
import { useDispatch } from "react-redux";
import { connectAction } from "../store";
import { push } from "connected-react-router";

export const Lobby: React.FC = () => {
  var [name, setName] = useState("");
  var [code, setCode] = useState("");
  const dispatch = useDispatch();
  const createAndConnect = async () => {
    var createLobbyCommand = {};
    var response = await axios.post("/api/lobby", createLobbyCommand);
    dispatch(connectAction({ name, code: response.data }));
  };

  const join = async () => {
    dispatch(connectAction({ name, code }));
  };

  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={code} onChange={e => setCode(e.target.value)} />
      <button onClick={createAndConnect}>Create</button>
      <button onClick={join}>Join</button>
    </div>
  );
};
