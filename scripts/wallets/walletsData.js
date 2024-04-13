const walletsData = {
    
    "testwallet": {
        tokens : {
            "shibainutoken": {
                name: "Shiba Inu Token",
                color: "#9bf59b",
                balanceAPIProperties: {
                    id: "etherscanERC20Tokens",
                    walletAdress: "0xF977814e90dA44bFA03b6295A0616a897441aceC",
                    contractAdress: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
                    tokenDecimals: 18

                },
                priceAPIProperties: {
                    id: "coingecko",
                    tokenID: "shiba-inu",
                    quoteCurrency: "usd"

                },
                price: 0,
                balance:0,
                value: 0,
                currency: "USD/$"

            }
        },
        name: "Test Wallet Shiba Inu",
        color: "#9bf5be",
        totalValue: 0,
        currency: "USD/$"
        
    },

    "testwallet2": {
        tokens : {
            "Ethereum": {
                name: "Ethereum",
                color: "#9bb0f5",
                balanceAPIProperties: {
                    id: "etherscanEthereum",
                    walletAdress: "0xBE0eB53F46cd790Cd13851d5EFf43D12404d33E8",
                    tokenDecimals: 18

                },
                priceAPIProperties: {
                    id: "coingecko",
                    tokenID: "ethereum",
                    quoteCurrency: "usd"

                },
                price: 0,
                balance:0,
                value: 0,
                currency: "USD/$"

            }
        },
        name: "Test Wallet Ethereum",
        color: "#9e9bf5",
        totalValue: 0,
        currency: "USD/$"
        
    }

};


const freezeWalletsData = () => {

    const frozenWalletsData = structuredClone(walletsData);
    return frozenWalletsData;

};



export { walletsData, freezeWalletsData };