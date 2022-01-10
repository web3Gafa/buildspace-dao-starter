import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import {readFileSync } from "fs"

const app = sdk.getAppModule("0xDe38B4EA8142829507e4e949D7d0fE6103eB55cC")

let  createBundleDropModule = async () =>{
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            // collection's name
            name:"RootsDAO Membership",
            //Description of the collection
            description:"A DAO For African Diasporians",
            image:readFileSync("scripts/assets/african.jpg"),

            primarySaleRecipientAddress:ethers.constants.AddressZero
        })

        console.log(
            "✅ Successfully deployed bundleDrop module, address:",
            bundleDropModule.address,
          );
        console.log(
            "✅ bundleDrop metadata:",
            await bundleDropModule.getMetadata(),
          )


    } catch (error) {
        console.log("failed to deploy bundleDrop module",error)
        
    }
}

createBundleDropModule()
