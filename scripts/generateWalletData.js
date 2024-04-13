import { walletsData } from "./wallets/walletsData.js";
import { chooseBalanceAPI } from "./modules/balanceAPIs/balanceAPIs.js";
import { choosePriceAPI } from "./modules/priceAPIs/priceAPIs.js";






const _fetchToken = async (balanceAPIProperties, priceAPIProperties) => {

    const fetchBalance = async () => {

        const balanceAPIInstance = chooseBalanceAPI(balanceAPIProperties);
        const balance = await balanceAPIInstance.fetchBalance(balanceAPIProperties);

        return balance;

    };

    const fetchPrice = async () => {

        const priceAPIInstance = choosePriceAPI(priceAPIProperties);
        const price = await priceAPIInstance.fetchPrice(priceAPIProperties);

        return price;

    };


    const tokenBalance = await fetchBalance();
    const tokenPrice = await fetchPrice();
    

    const token = {
        balance: tokenBalance,
        price: tokenPrice
    };

    return token;

};


const _calculateTokenValue = (token) => {

    const tokenValue = token.balance * token.price;
    return tokenValue;

};



const generateWalletDataAll = async () => {

    for (const [walletId, walletProperties] of Object.entries(walletsData)) {

        let totalValue = 0;

        for (const [tokenId, tokenProperties] of Object.entries(walletProperties.tokens)) {
            
            const token = await _fetchToken(tokenProperties.balanceAPIProperties, tokenProperties.priceAPIProperties);

            const tokenValue = _calculateTokenValue(token);

            tokenProperties.balance = token.balance;
            tokenProperties.price = token.price;
            tokenProperties.value = tokenValue;

            totalValue += tokenValue;
        
        }

        walletProperties.totalValue = totalValue;

    }

    return;

};


export { generateWalletDataAll };