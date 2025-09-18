
function isPalindrome(n) {
    let reverse = 0;
    if ( n < 1 ) return false;
    let number = n;
    for (let i = 0; number >= 1; i++) {
        let remainder = number % 10;
        number = Math.floor(number / 10)
        reverse = reverse * 10 + remainder;
    }
    return n == reverse
}

console.log(isPalindrome(1234321));

