let a = 5;
let b = 7;
console.log(`before : a = ${a}, b = ${b};`);
let temp = a;
a = b;
b = temp;
console.log(`after : a = ${a}, b = ${b};`);

let x = 5;
let y = 7;
console.log(`before : x = ${x}, y = ${y};`);
x = x + y;
y = x - y;
x = x - y;
console.log(`after : x = ${x}, y = ${y};`);

let p = 5;
let q = 7;
console.log(`before : p = ${p}, q = ${q};`);
[p, q] = [q, p];
console.log(`after : p = ${p}, q = ${q};`);
