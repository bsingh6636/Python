
const array = [5, 1, 1, 2, 0, 0];
const array2 = [5, 2, 3, 1];


const sortArray = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        let min = i;
        for (let j = i; j < nums.length; j++) {
            if (nums[min] > nums[j]) {
                min = j;
            }
        }

        if (i !== min) {
            [nums[i], nums[min]] = [nums[min], nums[i]]
        }

    }

    return nums;
}

console.log(sortArray(array2));
