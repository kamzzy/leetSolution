// Rotate Array
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

var rotate = function(nums, k) {
  let arr = nums.slice();
  for(let i =0; i <nums.length; i++) {
      nums[(i+k)%nums.length] = arr[i]
  }
};

console.log(rotate([1,2,3,4,5,6,7],2));

// OR
var rotate=function(nums, k)
{
    for(var i=0; i<k; i++)
        {
            var pop=nums.pop();
            nums.unshift(pop);
        }
    return nums;
}
console.log(rotate([1,2,3,4,5,6,7],2));