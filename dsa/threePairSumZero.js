let nums = [-1, 0, 1, 2, -1, -4] //Output: [[-1,-1,2],[-1,0,1]]

const checkThreeSumZero = (array) => {
    let sortedArr = array.sort(); // -4, -1, -1, 0, 1, 2
    let threeSum = [];
    for (let i = 0; i < sortedArr.length; i++) {
        // console.log("outer loop for "+sortedArr[i]);
        for (let j = i + 1; j < sortedArr.length; j++) {
            // console.log("inner loop for"+sortedArr[j]);
            for (let k = j+1; k < sortedArr.length; k++) {
                if ((sortedArr[i] + sortedArr[j]+sortedArr[k]) === 0) {
                    threeSum.push([sortedArr[i], sortedArr[j],sortedArr[k]]);
                }
            }
        }
    }
    return Array.from(new Set(threeSum.map(JSON.stringify)), JSON.parse);// this is correct but not working in vscode
}
console.log(checkThreeSumZero(nums));
