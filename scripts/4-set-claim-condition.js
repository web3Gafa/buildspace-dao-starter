import sdk from "./1-initialize-sdk.js";
const bundleDrop = sdk.getBundleDropModule("0xa99D2e7bcDB1CbA768113F53c8f9d63D392383c9")


let claimCondition = async () =>{
    try {
        const claimConditionFactory = bundleDrop.getClaimConditionFactory()

        //specify the conditions

        claimConditionFactory.newClaimPhase({
            startTime:new Date(),
            maxQuantity:50_000,
            maxQuantityPerTransaction:1
        })
        await bundleDrop.setClaimCondition(0,claimConditionFactory);
        console.log("✅ Successfully set claim condition on bundle drop:", bundleDrop.address);

        
        
    } catch (error) {
        console.error("Failed to set claim condition", error);
        
    }
}

claimCondition()