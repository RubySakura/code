// https://leetcode.cn/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

// TODO: 求第k小数算法，时间复杂度可达到O(log(m+n))

// 双指针移动法，但不符合题目的时间复杂度要求O(log(m+n))，实为O(m+n)
var findMedianSortedArrays1 = function (nums1, nums2) {
  const num1Len = nums1.length;
  const num2Len = nums2.length;
  const totalLen = num1Len + num2Len;
  const mid = totalLen;
  let leftMid = 0;
  let rightMid = 0;

  if (mid % 2 === 0) {
    rightMid = mid / 2;
    leftMid = rightMid - 1;
  } else {
    leftMid = rightMid = Math.floor(mid / 2);
  }

  leftMid = Math.max(0, leftMid);
  rightMid = Math.min(rightMid, totalLen - 1);

  let p1 = 0;
  let p2 = 0;
  let index = 0;
  let current = 0;
  let left = 0;
  let right = 0;

  while (p1 < num1Len || p2 < num2Len) {
    if (p1 < num1Len && p2 < num2Len) {
      if (nums1[p1] < nums2[p2]) {
        current = nums1[p1];
        p1++;
      } else {
        current = nums2[p2];
        p2++;
      }
    } else if (p1 < num1Len) {
      current = nums1[p1];
      p1++;
    } else {
      current = nums2[p2];
      p2++;
    }

    if (index === leftMid) {
      left = current;
    }

    if (index === rightMid) {
      right = current;
      break;
    }

    index++;
  }

  return (left + right) / 2;
};
