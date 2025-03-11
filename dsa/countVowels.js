let countVowelsFn = (str) => {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowelsFn("rAhulooooo"));

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("banana", 3));
