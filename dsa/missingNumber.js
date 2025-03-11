var missingNumber = function (nums) {
    let n =nums.length;
   let expectedSum = (n*(n+1))/2;
   let actualSum = nums.reduce((acc,sum)=>sum+acc);
   return expectedSum-actualSum;
};

let nums = [9,6,4,2,3,5,7,0,1]
//(8*(8+1))/2 =72/2=36
console.log(missingNumber(nums));
