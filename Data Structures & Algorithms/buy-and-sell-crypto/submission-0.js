class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0; 
        for(let i = 0; i < prices.length; i++){
            for(let j = i; j < prices.length; j++){
                const profit = prices[j] - prices[i];
                if(profit > 0 && profit > maxProfit){
                    maxProfit = profit;
                }
            }
        }
        return maxProfit
    }
}
