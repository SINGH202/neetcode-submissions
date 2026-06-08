class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length){
            return false;
        }

        let mapS = new Map();
        let mapT = new Map();

        for (const item of s){
            if(mapS.has(item)){
                mapS.set(item, mapS.get(item) + 1);
            }else{
                mapS.set(item, 1);
            }
        }
        for (const secItem of t){
            if(mapT.has(secItem)){
                mapT.set(secItem,  mapT.get(secItem) + 1)
            }else{
                mapT.set(secItem, 1)
            }
        }
        console.log(mapS, mapT)
        for (const [key, value] of mapS){

            if(mapT.get(key) !== value){
                return false
            }
        }
        return true;

        // Set cannot use for test cases like 
        // s="xx"
        // t="x"
        // const setS = new Set(s);
        // const setT = new Set(t);
        
        // if(setS.size !== setT.size){
        //     return false;
        // }
        // console.log(setS, setT)
        // for(const item of setS){
        //     if(!setT.has(item)){
        //         console.log(item)
        //         return false;
        //     }
        // }
        // return true;

    }
}
