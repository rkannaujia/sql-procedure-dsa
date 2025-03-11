//due to synchronous programming, sometimes imp instructions get blocked due to some previous instructions. which causes delay. Asynchrounus code execution allows us to execute next instructions immediately and doesn't block the flow.

console.log("one");
console.log("two");
setTimeout(()=>{
    console.log("timer3");  
},3000)
console.log("three");
setTimeout(()=>{
    console.log("timer4");  
},0)

setTimeout(()=>{
console.log("timer5");
},5000)
console.log("five");
console.log("six");