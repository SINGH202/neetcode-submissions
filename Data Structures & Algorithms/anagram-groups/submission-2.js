class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        for (const str of strs){
            const key = str.split("").sort().join("");

            if(!map.has(key)){
                map.set(key, [])
            }
            map.get(key).push(str);
        }
        return [...map.values()]
        // for(const str of strs){
        //     console.log(findAnagram(str, strs));
        // }
    }
}
    // function findAnagram(word, array){
    //     const sortedWord = word.split("").sort().join("");

    //     return array.filter((str) => str.split("").sort().join("")=== sortedWord);
    // }
