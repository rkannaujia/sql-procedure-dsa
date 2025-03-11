//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... =>each number is the sum of the two preceding ones
//F(n)=F(n−1)+F(n−2)
// for 0=> F(0)=F(0-1)+F(0-2) =>F(0)=0
// for 1=> F(1)=F(1-1)+F(1-2) =>F(1)=1
// for 2=> F(2)=F(2-1)+F(2-2) =>F(2)=2
// for 3=> F(3)=F(3-1)+F(3-2) =>F(3)=3
// for 4=> F(4)=F(4-1)+F(4-2) =>F(4)=5
// for 5=> F(5)=F(5-1)+F(5-2) =>F(5)=8

const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2); //=> F(6)=F(5)+F(4) sum of two preceding number
}

// for(let i=0; i<=10; i++){
//     console.log(fibonacci(i));
// }

let fibonacciSeriesFn = (num)=>{
    let resultArr = [];
    for(let i=0; i<=num; i++){
         resultArr.push(fibonacci(i))
        // console.log(fibonacci(i))
    }
     return resultArr;
}
//  console.log(fibonacciSeriesFn(10));

 var fib = function(n) {
    let arr = [0,1];
    for(let i =2; i<=n; i++){
     arr.push(arr[i-2]+arr[i-1]) //two preceding number
    } 
    return arr[n]
 };
 console.log(fib(3));
 

// console.log(fibonacci(6));
// const fibonacciON = (n) => {
//     if (n <= 1) return n;
//     let firstNum = 0, secondNum = 1, next;
//     for (let i = 2; i <= n; i++) {
//         next = firstNum + secondNum; // F(i) = F(i-1) + F(i-2)
//         firstNum = secondNum;
//         secondNum = next;
//     }
//     return secondNum;
// }
// console.log(fibonacciON(7));
