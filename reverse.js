function reverseString(str) {
    let reverse = "";
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        reverse = char + reverse;
    }
    return reverse;
}
let statement = "Hello Alien vai brothers. How are you.";
let forAlien = reverseString(statement);
console.log(forAlien);