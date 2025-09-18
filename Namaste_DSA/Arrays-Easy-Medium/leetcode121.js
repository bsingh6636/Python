/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = prices[0];
    let maxProfit = 0
    for(let i = 1 ; i < prices.length ; i++){
        if(min > prices[i]){
             min = prices[i];
            }
            console.log(prices[i] , min )
        if((prices[i] - min) > maxProfit ){
            maxProfit = prices[i] - min
        }
    }
    return { min , maxProfit }

};

// console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2]));