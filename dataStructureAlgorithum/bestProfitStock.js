// LC problem 121:

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let min = prices[0]; // to store the minimum price
    let maxProfit = 0; // to store the maximum profit

    // loop through the prices array from index 1
    for(let i = 1; i < prices.length; i++){
        // calculate the profit
        if(prices[i] - min > maxProfit) {
            maxProfit = prices[i] - min;
        }
        // update the minimum price
        if(prices[i] < min) {
            min = prices[i]
        }
    }

    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4])); // 5
console.log(maxProfit([7,6,4,3,1])); // 0
