const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let output = {}
let even = []
let odd = []
for(let number of numbers){
  if( number % 2 == 0){
    even.push(number);
   output["even"] = even ;
  } else {
    odd.push(number);
    output["odd"] = odd;
  }
}
console.log(output)
