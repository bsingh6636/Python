
function countNumberOfDigit (n){
    if(n < 1) return 0;
    let count = 0;
    while(n >= 1){
      n =  n / 10
      console.log(n)
      count ++
    }
    console.log("number of digit is", count )
}

countNumberOfDigit(987655);

