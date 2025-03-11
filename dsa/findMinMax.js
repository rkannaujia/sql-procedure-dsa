let minMax = (arr) => {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return { "min": min, "max": max };
}
console.log(minMax([1, 2, 3, 4, 5]))
console.log(Math.max(...[1, 2, 3, 4, 5]));

let minMaxLoop = (arr) => {
    let min=arr[0];
    let max = 0
    for (let i = 0; i <= arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i]
        } if (max < arr[i]) {
            max = arr[i]
        }
    }
    return {"min":min, "max":max}
}
console.log(minMaxLoop([10, 2, 3, 4, 5]));


