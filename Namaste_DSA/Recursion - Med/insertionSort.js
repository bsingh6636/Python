

const insertionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let current = i + 1;
        let prev = i;

        while (arr[current] <= arr[prev]) {
            [arr[current], arr[prev]] = [arr[prev], arr[current]];
            current--;
            prev--;
        }

    }

    return arr;
}

let arr1 = [5, 4, 3, 2, 1]
let arr2 = [3, 12, 65, 34, 34245, 45, 32, 5]

console.log(insertionSort([3]));