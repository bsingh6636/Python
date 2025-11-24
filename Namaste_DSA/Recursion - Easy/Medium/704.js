
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let right = nums.length - 1;
    let left = 0;

    while (right >= left) {
        let medium = Math.floor((right + left) / 2)

        const medNumber = nums[medium]

        // console.log(medNumber, target)

        if (medNumber == target) {
            return medium;
        } else if (medNumber < target) {
            left = medium + 1
        } else {
            right = medium - 1;
        }
    }

    return -1;


};

console.log(search([-1, 0, 3, 5, 9, 12, 15, 20, 100, 200], 100));