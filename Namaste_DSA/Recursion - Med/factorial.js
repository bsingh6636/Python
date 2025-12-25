

const factorail = (n) => {
    if (n == 1) return 1;
    else return n * factorail(n - 1)
}

console.log(factorail(7))