let nums = [0,0,1,1,1,2,2,3,3,4] 
var removeDuplicatesFn = function (nums) {
    if (nums.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++; 
            nums[i] = nums[j]
        }
    }
    return i + 1; 
};
console.log(removeDuplicatesFn(nums));

// let removeDup = (str) =>{
//     return [...new Set(str)].join('');
// }
// console.log(removeDup("1122334455"));



var removeDuplicates = function (nums) {
    if (nums.length === 0) return 0;
   return [...new Set(nums)].length; 
};
// console.log([...new Set([0,0,1,1,1,2,2,3,3,4])] );

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));




// console.log(uniqueArr);
// console.log(countDup);
