class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        for(var i = 0; i < nums.length; i++){
            const difference = target - nums[i];
            const index = nums.indexOf(difference)

            if(index !== -1 && index !== i){
                return i < index ? [i, index] : [index, i];
            }
        }
    }
}
