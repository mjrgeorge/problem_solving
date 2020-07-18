function myFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial = factorial * i;
    }
    return factorial;
}
let result = myFactorial(10);
console.log(result);