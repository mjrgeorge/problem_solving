function myFactorial(num) {
    let factorial = 1;
    let i = 1;
    while (i <= num) {
        factorial = factorial * i;
        i++
    }
    return factorial;
}
let result = myFactorial(10);
console.log(result);