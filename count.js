let speech = "my name is   george. I wat to world no.1 class a developer. I learning with Jhakar   mahbub";
let count = 0;
for (let i = 0; i < speech.length; i++) {
    let char = speech[i];
    if (char == " " && speech[i - 1] != " ") {
        count++;
    }
}
count++;
console.log(count);