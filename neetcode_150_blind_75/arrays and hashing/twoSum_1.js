1. Two Sum
Easy
49.3K
1.6K
Companies
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]


solution -

var twoSum = function(nums, target) {
    /*
    // brute force solution
    let output=[];
    for(let i= 0; i<nums.length; i++){
        for(let j= 0; j<nums.length; j++){
            if(i == j){
                continue;
            }
            if(nums[i] + nums[j] === target){
                output.push(i,j)
                return(output);
            }
        }
    }
    */

    // const container = new Map;
    // let output=[];

    // for(let i=0; i<nums.length; i++){
    //     let a = nums[i];
    //     let more = target - a;
    //     if(container.has(more)){
    //         output.push(container.get(more) , i)
    //         return(output);
    //     }
    //     else{container.set(a,i)}
    // }

    const container = {};

    for(let i = 0; i<nums.length; i++){
        if(target-nums[i] in container){
            return([i,container[target - nums[i]]]);
        }else{
            container[nums[i]] = i;
        };
    }


    // let obj={};
    // let ans=[];

    // for(var i=0; i<nums.length; i++){
    //     if(obj[target-nums[i]]===undefined){
    //         obj[nums[i]]=i;
    //     }else{
    //        return [obj[target-nums[i]], i]
    //     }
    // }
};