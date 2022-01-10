import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { ThirdwebWeb3Provider } from "@3rdweb/hooks";

// addoing the chians to be supported
// 4  = Rinkeby

const supportedChainIds = [4];

// include waht type of  wallet you want to support
//in this case , we support MetaMask which is an "injected wallet"

const connectors = {
  injected: {},
};

// Render the App component to the DOM
ReactDOM.render(
  <React.StrictMode>
    <ThirdwebWeb3Provider
      connectors={connectors}
      supportedChainIds={supportedChainIds}
    >
      <App />
    </ThirdwebWeb3Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
