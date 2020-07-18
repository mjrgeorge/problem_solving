function isPrime(n) {
    for (let i = 2; i < n - 1; i++) {
        if (n % i == 0) {
            return "You Number not a Prime Number.";
        }
    }
    return "Your Number is a Prime Number."
}
console.log(isPrime(17));