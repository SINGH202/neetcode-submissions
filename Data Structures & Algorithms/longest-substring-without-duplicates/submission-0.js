class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
         let maxLength = 0;

    function isUnique(left, right) {
        const seen = new Set();

        for (let i = left; i <= right; i++) {
            if (seen.has(s[i])) {
                return false;
            }
            seen.add(s[i]);
        }

        return true;
    }

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (isUnique(i, j)) {
                maxLength = Math.max(maxLength, j - i + 1);
            }
        }
    }

    return maxLength;
    }
}
