// https://leetcode.cn/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let index in nums) {
    const num = nums[index];

    if (map.has(num)) {
      return [map.get(num), index];
    } else {
      const key = target - num;
      map.set(key, index);
    }
  }
};
