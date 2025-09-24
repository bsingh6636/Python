/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1, m, nums2, n) {
    const nums1Copy = nums1.slice(0, m);
    let p1 = 0;
    let p2 =0;
    for(let i = 0 ; i < m + n ; i++){
        if( p2 >= n || (nums1Copy[p1] < nums2[p2])){
            // console.log('executing first if' , p2 , n , nums1Copy[p1] , nums2[p2] , p2 >= n , nums1Copy[p1] < nums2[p2] )
            nums1[i] = nums1Copy[p1];
            p1++
        }else{
            console.log('executing 2nd if')
            nums1[i] = nums2[p2];
            p2++
        }
    }
    console.log('FInal', nums1)
};

function merge2( nums1 , m, nums2 , n ){
    let p1 = m-1 ;
    let p2 = n -1 ;
    for(let i = m + n - 1 ; i >= 0 ; i-- ){
        if( p2 < 0 || (nums1[p1] > nums2[p2] && p1 >= 0) ){
            nums1[i] = nums1[p1];
            p1--
        }else{
            nums1[i] = nums2[p2];
            p2--
        }
    }

    console.log(nums1)

}
 
merge2([1, 2, 3, 0, 0, 0], 3, [2, 4 ,5 , 6, 7], 5)
merge2([1], 1 , [] , 0)


// 6000 Credit
// 8186 debit
// 6500 Credit
// 7255 debit
// 11000 credit
// 13598 debit