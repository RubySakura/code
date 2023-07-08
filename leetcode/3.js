// https://leetcode.cn/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let max = 0;
  let left = 0;
  let right = 0;
  const sLen = s.length;

  while (right < sLen) {
    if (map.has(s[right]) && map.get(s[right]) >= left) {
      max = Math.max(max, right - left);
      left++;
    } else {
      map.set(s[right], right);
      right++;
    }
  }

  max = Math.max(max, right - left);

  return max;
};
