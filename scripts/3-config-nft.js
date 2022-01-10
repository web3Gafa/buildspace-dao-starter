import sdk from "./1-initialize-sdk.js"
import {readFileSync} from "fs"

const bundleDrop = sdk.getBundleDropModule("0xa99D2e7bcDB1CbA768113F53c8f9d63D392383c9")

let createBatch = async () =>{
    try {
        await bundleDrop.createBatch([
            {
                name:"African Child",
                description:"This will give you access to RootsDAO",
                image:readFileSync("scripts/assets/african.jpg"),

            }
        ])
    console.log("✅ Successfully created a new NFT in the drop!");
    } catch (error) {
        console.error("failed to create the new NFT", error);
        
    }
}

createBatch()