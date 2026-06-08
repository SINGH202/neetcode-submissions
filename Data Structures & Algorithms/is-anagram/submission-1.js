class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false
        }
        //sorting
        const sortS = s.split("").sort().join("");
        const sortT = t.split("").sort().join("");
        if(sortS !== sortT){
            return false;
        }
        return true; 
    }
}
