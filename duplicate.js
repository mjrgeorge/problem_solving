function duplicate(list) {
    let finalList = [];
    for (let i = 0; i < list.length; i++) {
        let element = list[i];
        let elementIndex = finalList.indexOf(element);
        if (elementIndex == -1) {
            finalList.push(element);
        }
    }
    return finalList;
}

let friendList = ["george", "rathin", "torit", "maruf", "zabir", "riad", "reja", "maruf", "torit", "zabir", "reja", "rathin", "jewel"];

let result = duplicate(friendList);
console.log(result);