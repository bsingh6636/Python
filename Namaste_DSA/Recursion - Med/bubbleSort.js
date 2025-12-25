
let swapped;
for (let i = 0; i < arr.length - 1; i++) {
    swapped = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            swapped = true;
        }
    }

    if (!swapped) break;
}


console.log(bubbleSort([100, 300, 5, 54, 2, 900, 54, 43, 435, 234, 45, 8, 4, 1]))