function largestNumber(num) {
    let large = num[0];
    for (let i = 0; i < num.length; i++) {
        let element = num[i];
        if (large < element) {
            large = element;
        }
    }
    return large;
}
let marks = [55, 63, 48, 21, 96, 78, 85, 99];
let result = largestNumber(marks);
console.log("Most of Highest Value is " + result + ".");