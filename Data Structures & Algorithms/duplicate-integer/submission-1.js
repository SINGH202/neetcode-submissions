class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        //brute force
        // for(var i = 0; i < nums.length; i++){
        //     for(var j = i+1; j < nums.length; j++){
        //         if(nums[i] === nums[j]){
        //             return "true"
        //         }
        //     }
        // }
        // return "false";

        //set approach
        // const seen = new Set();

        // for(const num of nums){
        //     if(seen.has(num)){
        //         return true; 
        //     }
        //     seen.add(num);
        // }
        // return false;

        // Using Set size
        return new Set(nums).size !== nums.length;
    }
}
