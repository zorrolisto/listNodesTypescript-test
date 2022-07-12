function pivotIndex(nums: number[]): number {
  let left = 0;
  let leftSum = nums[left];
  let right = nums.length - 1;
  let rightSum = nums[right];

  const leftSumCero = nums.reduce((sum, num) => sum + num) - leftSum === 0;
  if (leftSumCero) {
    return 0;
  }
  const rigthSumCero = nums.reduce((sum, num) => sum + num) - rightSum === 0;
  if (rigthSumCero) {
    return 0;
  }

  while (left < right) {
    if (leftSum === rightSum && left === right - 2) {
      return left + 1;
    }
    if (leftSum < rightSum) {
      left++;
      leftSum += nums[left];
    } else {
      right--;
      rightSum += nums[right];
    }
  }
  return -1;
}

//const asked = [1, 7, 3, 6, 5, 6];
const asked = [-1, -1, -1, -1, -1, 0];
console.log(pivotIndex(asked));
