class etherscanEthereumAPI {

    constructor() {

        this.apiKey = "";

    }

    async _requestBalanceFromAPI(walletAdress) {

        const requestUrl = `https://api.etherscan.io/api?module=account&action=balance&address=${walletAdress}&tag=latest&apikey=${this.apiKey}`;

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

        const {walletAdress, tokenDecimals} = balanceAPIProperties;

        const fetchedJSON = await this._requestBalanceFromAPI(walletAdress);
        const calculatedBalance = this._calculateBalance(tokenDecimals, fetchedJSON);

        return calculatedBalance;

    }

}



etherscanEthereumAPI.id = "etherscanEthereum";


export { etherscanEthereumAPI };