const arr = [3, 12, 45, 65, 34, 5, 3, 5, 34245, 45, 32, 5];

const insertionSort = async () => {
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

console.log(insertionSort());