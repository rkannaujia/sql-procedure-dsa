// get all the even number by using both methods (ifelse and recursion)

let arr = []
const getevenNumber = (num)=>{
if(num<=0) return
if(num % 2 ==0){
    arr.push(num);
}
 getevenNumber(num-1)
 return arr;
}
console.log(getevenNumber(50));
