import { etherscanERC20TokensAPI } from "./etherscan/etherscanERC20TokensAPI.js";
import { etherscanEthereumAPI } from "./etherscan/etherscanEthereumAPI.js";



function chooseBalanceAPI(balanceAPIProperties) {

    const balanceAPIID = balanceAPIProperties.id;

    let balanceAPIInstance = null;
    switch(balanceAPIID) {

        case etherscanERC20TokensAPI.id:
            balanceAPIInstance = new etherscanERC20TokensAPI();
            break;

        case etherscanEthereumAPI.id:
            balanceAPIInstance = new etherscanEthereumAPI();
            break;

        default:
            console.log(`No balanceAPI was found for the id: ${balanceAPIID}`);

    }

    return balanceAPIInstance;

}



export { chooseBalanceAPI };