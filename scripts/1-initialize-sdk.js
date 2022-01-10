

import { ThirdwebSDK} from "@3rdweb/sdk"
import  ethers from "ethers"

import dotenv from "dotenv";
dotenv.config();

if(!process.env.PRIVATE_KEY || process.env.PRIVATE_KEY ==""){
    console.log("🛑 Private key not found.")
}

if (!process.env.ALCHEMY_API_URL || process.env.ALCHEMY_API_URL == "") {
    console.log("🛑 Alchemy API URL not found.")
  }
  
  if (!process.env.WALLET_ADDRESS || process.env.WALLET_ADDRESS == "") {
    console.log("🛑 Wallet Address not found.")
  }

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        process.env.PRIVATE_KEY,
        ethers.getDefaultProvider(process.env.ALCHEMY_API_URL),
    ),
)

let init = async() => {
    try {
        const app = await sdk.getApps();
        console.log("My Application address is :",app[0].address)
    } catch (error) {
        console.log("Failed to get apps from sdk , ",error)
        process.exit(1)
        
    }
}
init()


export default sdk