function add(num) {
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        let element = num[i];
        sum = sum + element;
    }
    return sum;
}
let numbers = [10, 25, 20, 15, 30, 5, 56, 24, 86, 321, 15, 2656, 552];
let result = add(numbers);
console.log(result);