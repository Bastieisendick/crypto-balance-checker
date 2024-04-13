import { coingeckoAPI } from "./coingecko/coingeckoAPI.js";




function choosePriceAPI(priceAPIProperties) {

    const priceAPIID = priceAPIProperties.id;

    let priceAPIInstance = null;
    switch(priceAPIID) {

        case coingeckoAPI.id:
            priceAPIInstance = new coingeckoAPI();
            break;

        default:
            console.log(`No priceAPI was found for the id: ${priceAPIID}`);

    }

    return priceAPIInstance;

}



export { choosePriceAPI };