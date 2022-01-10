import { useEffect,useMemo, useState } from "react";

// importing web3
import { useWeb3 } from "@3rdweb/hooks";


const App = () => {

  //use the connectWallet hook thirdweb give  us
  const {connectWallet , address, error , provider} = useWeb3()
  console.log("Address:",address)

  // if user not conncetd the wallet
  if (!address) {
    return (
      <div className="landing">
        <h1>Welcome to RootsDAO</h1>
        <button onClick={() => connectWallet("injected")} className="btn-hero">
          Connect your wallet
        </button>
        <h1>Make A sound Investment whilst in Diaspora</h1>
      </div>
    );
  }

  return (
    <div className="landing">
      <h1> wallet connected , lets do it</h1>
    </div>
  );
};

export default App;
