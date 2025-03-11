// a closer is a phenomenon that retains access to variable from its parent scope even after parent function finished executing
const createCounter = () => {
    let count = 0; // this is a variable that belongs to outer Function's scope
    return () => {  
        count++;
        return count;
    }
}
const counter1 = createCounter();
console.log("counter1",counter1());
console.log("counter1",counter1());
const counter2 = createCounter();
console.log("counter2",counter2());
console.log("counter2",counter2());