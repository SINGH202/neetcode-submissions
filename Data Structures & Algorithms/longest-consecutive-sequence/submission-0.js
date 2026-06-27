class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let longest = 0; 
        for(const num of nums){
            let current = num; 
            let length = 1; 

            while(nums.includes(current + 1)){
                current++;
                length++;
            }
            longest = Math.max(longest, length);
        }
        return longest;
    }
}
