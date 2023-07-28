// https://leetcode.com/problems/contains-duplicate/

var containsDuplicate = function(nums) {

    // // using set length;
    
    // const collection = new Set(nums);
    
    // return(!(nums.length === collection.size))
    
    // using hash
    const collection = new Set();
    
    for(let num of nums){
        if(collection.has(num)) return true;
        else{collection.add(num)}
    }
    
    return false;
    
    // // 2 for loop
    // for(let i = 0; i<nums.length; i++){
    //     for(let j =i+1; j<nums.length; j++){
    //         if(nums[i] === nums[j]){
    //             return true
    //         }
    //     }
    // }
    
    // return false
    
    };