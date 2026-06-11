class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        for(let i =0; i < nums.length; i++){
            let multiply = 1;
            for(let j = 0; j < nums.length; j++){
                if(j !== i){
                    multiply = multiply * nums[j]
                    // console.log(multiply);
                }
            }
            result.push(multiply);
            multiply = 1;
        }
        // console.log(result);
        return result;
    }
}
