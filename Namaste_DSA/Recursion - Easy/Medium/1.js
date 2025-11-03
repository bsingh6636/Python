
// function print ( num ){
//     if(num == 0) return;

//     console.log(num);
//     print(--num)
// }

// print(20);




// function sum (n){
//     if(n == 1) return 1 ;
//     return n + sum(n-1)
// }

// console.log(sum(5))

const arr = [5, 1, 3, 5, 6, 20]

function array_sum(n) {
    if (n == 0) return arr[n];
    return arr[n] + array_sum(n - 1)
}

console.log(array_sum(arr.length - 1))
