//longest word in a sentence
const longestWord = (str) =>{
let longest = 0;
let copiedword =""
let words = str.split(' ');
for( let word of words){
    if(word.length > longest){
        longest = word.length;
        copiedword = word
    }
}
return {copiedword,"length": longest};
}
console.log(longestWord("this is a big sentence & for the testingjfjf"));

// console.log("this is a big sentence".split(' '));