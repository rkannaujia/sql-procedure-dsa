const nums = [2,7,11,15]
const target = 9
/** 
const twoSum = (nums,target)=>{
    for (let i=0; i<=nums.length; i++){
       for(let j=i+1; j<nums.length; j++){
        if(nums[i]+nums[j]==target){
            return [i,j]
        }
       }
    }
}
console.log(twoSum(nums,target));
*/
const twoSum =(arr,target)=>{
    const map =new Map();
    for(let i =0; i<=arr.length; i++){
        const complement = target-arr[i];
        if(map.has(complement)) return [map.get(complement),i]
        map.set(arr[i],i)
    }
}

console.log(twoSum(nums, target)); // Output: [1, 2]

