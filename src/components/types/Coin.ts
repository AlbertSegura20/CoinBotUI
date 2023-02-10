interface ICoin {
    name: string
    symbol: string,
    coinAmount: number,
    minimumUsdToBuy: number,
    assignedUsd: number,
    availableUsd: number,
    assignedUsdToBuyInOffer: number,
    minimumUsdToSell: number,
    assignedUsdToSellInOffer: number,
    userName: string,
    lastOrderPrice: number,
    lastBuyOrderPrice: number,
    lastSellOrderPrice: number,
    isTrading: boolean
}

export default ICoin;