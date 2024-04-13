class coingeckoAPI {

    constructor() {

        this.apiKey = "";

    }

    async _requestPriceFromAPI(tokenID, quoteCurrency) {

        const requestUrl = `https://api.coingecko.com/api/v3/simple/price?ids=${tokenID}&vs_currencies=${quoteCurrency}`;

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-cg-pro-api-key': this.apiKey
            },

        };

        const response = await fetch(requestUrl, requestOptions);
        const fetchedJSON = await response.json();
            
        return fetchedJSON;

    }

    _calculatePrice(tokenID, quoteCurrency, fetchedJSON) {

        const price = fetchedJSON[tokenID][quoteCurrency];
        
        return price;

    }

    async fetchPrice(priceAPIProperties) {

        const {tokenID, quoteCurrency} = priceAPIProperties;

        const fetchedJSON = await this._requestPriceFromAPI(tokenID, quoteCurrency);
        const calculatedPrice = this._calculatePrice(tokenID, quoteCurrency, fetchedJSON);

        return calculatedPrice;

    }

}



coingeckoAPI.id = "coingecko";


export { coingeckoAPI };