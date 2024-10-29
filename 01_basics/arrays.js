const myArray = [1, "DHAIRYA", 2, 3, 4, 5];

console.log(myArray[1]);

const arr1 = ["sdf", "df", "heer", "pappu", "daaym"];
const arr2 = ["asdf", ["sdf", "adsf", "asdf", ["df", "abc"]]];

const arr3 = arr1.concat(...arr2);

const arr4 = [...arr1, ...arr2];

const arr5 = arr2.flat(6);

const arr6 = [...arr1, ...arr5];

// console.log(arr6);

console.table(arr6)
