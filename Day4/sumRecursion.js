function findSum (n){
    if( n == 0 ) return 0;
    else return n % 10 + findSum(Math.floor(n / 10));


}

console.log(findSum(1234))