class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for(const num of nums){
            if(!map.has(num)){
                map.set(num, 1);
            }else{
                map.set(num, map.get(num)+1)
            }
        }
        const arr = [...map.entries()];
        arr.sort((a, b) => b[1] - a[1]);

const result = [];
        for(let i = 0; i < k; i++){
            result.push(arr[i][0]);
        }
        return result;
    }
}
