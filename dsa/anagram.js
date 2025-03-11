let anagramFunction2 = (str1,str2)=>{
    if(str1.length!==str2.length) return false  
return str1.split('').sort().join('') === str2.split('').sort().join('');
}
console.log(anagramFunction2("anagram","nagaram"));
let anagramFunction = (str1,str2)=>{
    if(str1.length!==str2.length) return false 
    let obj1 = {} 
    let obj2 = {} 
for (let i = 0; i < str1.length; i++) {
  obj1[str1[i]]= (obj1[str1[i]] || 0)+1; //for the first time it will add 0 and then it will add +1
  obj2[str2[i]]= (obj2[str2[i]] || 0)+1;
}
for (const key in obj1) {
    if(obj1[key]!==obj2[key]) return flase
}
return true
}
console.log(anagramFunction("anagram","nagaram"));