function myFactorial(num) {
    if (num == 1) {
        return 1;
    } else {
        return num * myFactorial(num - 1);
    }
}
let result = myFactorial(5);
console.log(result);