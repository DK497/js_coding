/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated 
at an unknown pivot index k (1 <= k < nums.length) such that the resulting
 array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] 
 (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 
 and become [4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, 
return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity
*/

function bruteFind(arr, target) {
  for (i in arr) {
    if (target === arr[i]) {
      return i;
    }
  }
  return null;
}
// Time Complexity: O(n)
// Space Complexity: O(1)

// const index = bruteFind([2, 3, 4, 5, 6, 1231, 12, 45, 6, 88], 63);
// console.log("index is", index);

// using binary search, if array rotated around unknown pivot
//  and adding some minor manipulation
// first we will check which half is sorted and athen check
// if element to be searched is present in that half

// Similar asked in Walmart
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Check if the middle element is the target
    if (arr[mid] === target) return mid;

    // Checking if left half is sorted
    if (arr[left] <= arr[mid]) {
      // Checking if elemen in left half
      if (target >= arr[left] && target <= arr[mid]) {
        right = mid - 1; //search left half
      } else left = mid + 1; //search right half
    } else {
      // Checking if right half is sorted

      // check if element in right half
      if (target >= arr[mid] && target <= arr[right]) {
        // search in right half
        left = mid + 1;
      } else {
        // search in left half
        right = mid - 1;
      }
    }
  }
  return -1;
}

// const index = binarySearch([6, 7, 0, 1, 2, 3, 4, 5], 0);
// console.log("index is", index);
/*Time Complexity: O(log n), because each step of the 
                  binary search reduces the search space by half.

Space Complexity: O(1), since we only use a constant amount of
                  extra space for pointers (left, right, mid).
*/
