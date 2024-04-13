
# crypto-balance-checker  
Watch your crypto portfolio grow with this easy website.</br>
Check all of your wallets balances in one click.

## Installing 

Adjust scripts/wallets/walletsData.js to your needs. Add your own Wallets, tokens, etc...

~~~bash  
"testwallet": {                               //Internal WalletID
    tokens : {
        "shibainutoken": {                    //Internal tokenID
            name: "Shiba Inu Token",          //Internal name of the token
            color: "#9bf59b",                 //Token color for the charts
            balanceAPIProperties: {
                id: "etherscanERC20Tokens",   //ID of the internal balanceFetching API Module, for example scripts/modules/balanceAPIs/etherscan/etherscanERC20TokensAPI.js
                walletAdress: "0xF977814e90dA44bFA03b6295A0616a897441aceC",       //Your Wallet Adress
                contractAdress: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",     //Contract Adress for the token, if one exists (ethereum alone does not have one)
                tokenDecimals: 18             //Decimals of your token

            },
            priceAPIProperties: {
                id: "coingecko",              //ID of the internal priceFetching API Module, for example scripts/modules/priceAPIs/coingecko/coingeckoAPI.js
                tokenID: "shiba-inu",         //ID of the token on coingecko. You can implement your own priceFetchingAPIs with your own attributes too
                quoteCurrency: "usd"          //Currency for the price fetching, required by coingecko

            },
            price: 0,                         //Current price of the token (Will be filled by scripts/generateWalletData.js)
            balance:0,                        //Current balance of the token on your wallet (Will be filled by scripts/generateWalletData.js)
            value: 0,                         //Current value of the token held by your wallet (Will be filled by scripts/generateWalletData.js)
            currency: "USD/$"                 //Currency of the token value

        }
    },
    name: "Test Wallet Shiba Inu",            //Internal name of the Wallet
    color: "#9bf5be",                         //Wallet color for the charts
    totalValue: 0,                            //Current value of your Wallet (Will be filled by scripts/generateWalletData.js)
    currency: "USD/$"                         //Currency of the Wallet value
    
},
~~~

Add your own API Access keys (Create an etherscan account for example)

~~~bash  
For example in the balanceAPIs:
scripts/modules/balanceAPIs/etherscan/etherscanERC20TokensAPI.js
this.apiKey = "Your own API key";
scripts/modules/balanceAPIs/etherscan/etherscanEthereum.js
this.apiKey = "Your own API key";
~~~

Host your website in your local network

~~~bash  
Apache if you want
~~~

Open the website  

~~~bash  
my-local-pc.local/crypto-balance-checker
~~~


## Developing
You can easily add your own balanceFetching APIs in the balanceAPIs folder. Use the already defined ones as a structure.</br>
You can easily add your own priceFetching APIs in the priceAPIs folder. Use the already defined ones as a structure.</br></br>
Currently, only ERC20 Tokens and ethereum itself can be viewed, but by adding your own balance and price Fetching API you can view any coin you want.

## Notes
This project should only be run in a network controlled and monitored by you.
Else your wallet data will be accessible by anyone in the network and possibly outside.</br>
By using etherscan and coingecko API's as free subscriptions, you should only reload this website every minute or so depending on the amount of wallets connected.</br>
This will prevent you from running into rate limits.



## Attributions  

- [Etherscan API](https://etherscan.io/)
- [Coingecko API](https://coingecko.com/)
- [Chart.js](https://www.chartjs.org/)


## License  

[UNLICENSE](https://choosealicense.com/licenses/unlicense/)

Hereby no guarantees or responsibilities are taken.<br/>