(function iifeFn() {
    console.log("Immediately Invoked function expression");  
})();

(()=> {
 console.log("Arrow fn=>Immediately Invoked function expression");  
})();

(async()=> {
    console.log("async fn=>Immediately Invoked function expression");  
   })();