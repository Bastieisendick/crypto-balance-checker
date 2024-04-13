import { walletsData, freezeWalletsData } from "./wallets/walletsData.js";
import { generateWalletDataAll } from "./generateWalletData.js";




const initialize = async () => {

    await generateWalletDataAll();
    return;

};





const drawWalletOverviewChart = async () => {

    const generateLabelData = () => {

        const labelData = [];

        for (const [walletId, walletProperties] of Object.entries(frozenWalletsData)) {

            labelData.push(walletProperties.totalValue);

        }

        return labelData;

    };

    const generateBarColors = () => {

        const barColors = [];

        for (const [walletId, walletProperties] of Object.entries(frozenWalletsData)) {

            barColors.push(walletProperties.color);

        }

        return barColors;

    };

    const generateBarLabels = () => {

        const barLabels = [];

        for (const [walletId, walletProperties] of Object.entries(frozenWalletsData)) {

            barLabels.push(`${walletProperties.name} in ${walletProperties.currency}`);

        }

        return barLabels;

    };


    const frozenWalletsData = freezeWalletsData();

    const walletsOverviewChart = document.getElementById('walletsOverviewChart');

    const chartLabelData = generateLabelData();
    const chartBarColors = generateBarColors();
    const chartBarLabels = generateBarLabels();
  
    new Chart(
        walletsOverviewChart, {
            type: "bar",
            data: {
                labels: chartBarLabels,
                datasets: [
                    {
                        label: "Wallet Overview",
                        data: chartLabelData,
                        borderWidth: 1,
                        backgroundColor: chartBarColors, 
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    );


    return;

};


const drawWalletDetailChart = async (walletId, walletProperties) => {

    const generateLabelData = () => {

        const labelData = [];

        for (const [tokenId, tokenProperties] of Object.entries(walletProperties.tokens)) {

            labelData.push(tokenProperties.value);

        }

        return labelData;

    };

    const generateBarColors = () => {

        const barColors = [];

        for (const [tokenId, tokenProperties] of Object.entries(walletProperties.tokens)) {

            barColors.push(tokenProperties.color);

        }

        return barColors;

    };

    const generateBarLabels = () => {

        const barLabels = [];

        for (const [tokenId, tokenProperties] of Object.entries(walletProperties.tokens)) {

            barLabels.push(`${tokenProperties.name} in ${tokenProperties.currency}`);

        }

        return barLabels;

    };


    const chartHtmlElementID = `walletDetailChart_${walletId}`

    const createdWalletDetailChart = document.createElement("canvas");
    createdWalletDetailChart.id = chartHtmlElementID;
    createdWalletDetailChart.style = `width:100%;max-width:80vw;margin:10vw;`;

    document.getElementById("walletDetailChartsContainer").appendChild(createdWalletDetailChart);

    const walletDetailChart = document.getElementById(chartHtmlElementID);

    const chartLabelData = generateLabelData();
    const chartBarColors = generateBarColors();
    const chartBarLabels = generateBarLabels();
  
    new Chart(
        walletDetailChart, {
            type: "bar",
            data: {
                labels: chartBarLabels,
                datasets: [
                    {
                        label: walletProperties.name,
                        data: chartLabelData,
                        borderWidth: 1,
                        backgroundColor: chartBarColors, 
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    );


    return;

};


const drawAllWalletDetailCharts = async () => {

    const frozenWalletsData = freezeWalletsData();

    for (const [walletId, walletProperties] of Object.entries(frozenWalletsData)) {

        await drawWalletDetailChart(walletId, walletProperties);

    }


    return;

};



await initialize();


await drawWalletOverviewChart();

await drawAllWalletDetailCharts();
