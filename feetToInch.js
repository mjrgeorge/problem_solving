function feetToInch(inch) {
    let feet = inch / 12;
    if (feet < 0 || feet == " ") {
        feet = "Please check you input field data.";
    }
    feet = feet.toFixed(2);
    return feet;
}
let result = feetToInch(52);
console.log(result);