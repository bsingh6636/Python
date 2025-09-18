
function reverseInteger (n){
    let reversedInteger = 0;
    let isNegative = false;
    if(n < 0){
        n = n * -1;
        isNegative = true;
    }
    while (n >=1 ){
        let remainder = n % 10 ;
        reversedInteger = reversedInteger * 10 + remainder;
        n = Math.floor(n / 10);
    }
    let limit = Math.pow(2 , 31);
    if(reversedInteger > limit || reversedInteger < (-limit -1)) return 0;
    return isNegative ? -reversedInteger : reversedInteger;
}

console.log(reverseInteger(21233));
console.log(reverseInteger(-21233));
console.log(reverseInteger(-12));