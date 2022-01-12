import sdk from "./1-initialize-sdk.js"

const app = sdk.getAppModule("0xDe38B4EA8142829507e4e949D7d0fE6103eB55cC")


let deployToken = async () => {
    try {
      // Deploy a standard ERC-20 contract.
      const tokenModule = await app.deployTokenModule({
        // What's your token's name? Ex. "Ethereum"
        name: "RootsDAO Governance Token",
        // What's your token's symbol? Ex. "ETH"
        symbol: "ROOTS",
      });
      console.log(
        "✅ Successfully deployed token module, address:",
        tokenModule.address,
      );
    } catch (error) {
      console.error("failed to deploy token module", error);
    }
  }

  deployToken()