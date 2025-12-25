

const insertionSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let current = i;
        let prev = i - 1;

        while (prev > 0 && arr[current] <= arr[prev]) {
            [arr[current], arr[prev]] = [arr[prev], arr[current]];
            current--;
            prev--;
        }

    }

    return arr;
}

console.log(insertionSort([3])); // [3]
console.log(insertionSort([5, 4, 3, 2, 1])); // [1,2,3,4,5]
console.log(insertionSort([3, 12, 65, 34, 34245, 45, 32, 5]));
console.log(insertionSort([])); // []
console.log(insertionSort([1, 2, 3, 5, 4]));
console.log(insertionSort([3]));