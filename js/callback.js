const calculate = (a, b, sumCallback)=> {
    sumCallback(a,b);
}
// const sum = (a, b) =>console.log(a + b);
// calculate(10, 12, sum);

calculate(10,12,(a,b)=>console.log(a+b))


//async callback
const hello = ()=> console.log("hello")
//we are passing a hello funtion as an argument to another function 
setTimeout(hello,3000);

//we are passing a funtion as an argument to another function 
setTimeout(() => {
    console.log("Step 1: Get user data");
},4000);
