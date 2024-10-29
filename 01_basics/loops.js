let arr = [2, 32, 4, 5, 12];

// for (const val1 of arr) {
//   console.log(val1);
// }

const hello = "Hello World ";

// for (const val of hello) {
//   console.log(val);
// }

const map = new Map();

map.set("IN", "India");
map.set("USA", "United States Of America");
map.set("Fr", "Frances");

for (const key of map) {
  // console.log(key);
}

// arr.forEach((elem) => {
//   console.log(elem);
// });

const coding = ["js", "java", "ruby", "swift", "cpp"];

const values = coding.forEach((element) => {
  // console.log(element);
});

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.filter((num) => {
  return num > 4;
});
// console.log(newNums);

const newNums1 = [];

myNums.forEach((num) => {
  if (num > 4) {
    newNums1.push(num);
  }
});

// console.log(newNums1);

const books = [
  {title: "Book One", genre: "Fiction", publish: 1981, edition: 2004},
  {title: "Book two", genre: "Non-Fiction", publish: 1581, edition: 2034},
  {title: "ook three", genre: "Science", publish: 1181, edition: 2104},
  {title: "ook four", genre: "History", publish: 1181, edition: 2104},
];

const userBooks = books.filter((val) => val.title.startsWith("Boo"));

console.log(userBooks);
