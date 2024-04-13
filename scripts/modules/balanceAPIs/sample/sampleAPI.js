class sampleAPI {

    constructor() {

        this.apiKey = "";

    }

    async _requestBalanceFromAPI(walletAdress, contractAdress) {

        const requestUrl = `https://sampleapi.com/api?module=account&action=tokenbalance&contractaddress=${contractAdress}&address=${walletAdress}&tag=latest&apikey=${this.apiKey}`;

        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },

        };

        const response = await fetch(requestUrl, requestOptions);
        const fetchedJSON = await response.json();
            
        return fetchedJSON;

    }

    _calculateBalance(tokenDecimals, fetchedJSON) {

        const fullBalance = fetchedJSON.result;
        const calculatedBalance = fullBalance / Math.pow(10, tokenDecimals);

        return calculatedBalance;

    }

    async fetchBalance(balanceAPIProperties) {

        const {walletAdress, contractAdress, tokenDecimals} = balanceAPIProperties;

        const fetchedJSON = await this._requestBalanceFromAPI(walletAdress, contractAdress);
        const calculatedBalance = this._calculateBalance(tokenDecimals, fetchedJSON);

        return calculatedBalance;

    }

}



sampleAPI.id = "sample";


export { sampleAPI };