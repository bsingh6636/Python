
function secondLargest (arr){
    if(arr.length < 2 ) return null
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for(let num of arr){
        if(num > largest){
            secondLargest = largest;
            largest = num
        } else if (num > secondLargest){
            if (num == largest) continue;
            secondLargest = num
        }
    }
    return secondLargest;
}


console.log(secondLargest([32, 45, 9, 22, 40, 32])); // 40
console.log(secondLargest([100, 100, 100])); // undefined
console.log(secondLargest([-10, -5, -20])); // -10
console.log(secondLargest([1])); // undefined
console.log(secondLargest([1, 2])); // 1
console.log(secondLargest([5, 10, 10,10, 9])); // 9
