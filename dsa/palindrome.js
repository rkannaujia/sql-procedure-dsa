//121 , "level"==>reads the same forward and backward
let checkPal = 121;
const isPalCheckNum = (num) => {
    let originalNum = num;
    let revNum = 0;
    while (num > 0) {
        let lastDigit = num % 10;
        revNum = (revNum * 10) + lastDigit;
        num = Math.floor(num / 10);
    }
        if (originalNum === revNum) return true;
}
const isPalindrome = (str) => {
    if(isNaN(str)) return str === str.split('').reverse().join(''); // for string
    return str< 0 ? false : str === +str.toString().split('').reverse().join(''); //for number first we are checking the edge case that number is less than 0
}
console.log(isPalindrome("121"));


// console.log(isPalCheckNum(121));
// let num="nayan";
// console.log( num < 0 ? false : num === +num.toString().split('').reverse().join(''));

