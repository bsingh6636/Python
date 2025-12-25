
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i]
        for (let j = i + 1; j < arr.length; j++) {
            if (min > arr[j]) {
                [min, arr[j]] = [arr[j], min];
                // break;
            }
        }

        arr[i] = min
    }
    return arr;
}

console.log(selectionSort([3, 12, 45, 65, 34, 5, 3, 5, 34245, 45, 32, 5]))