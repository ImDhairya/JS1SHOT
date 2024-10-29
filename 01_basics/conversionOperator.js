let score = "sdef32";
let score2 = undefined;

console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);

// number of a null is zero(0)
// number of an undefined is NaN

// null > 0 false
// null == 0 false
// null >= 0 true
// **********************************************************************************
// primitive data types uses STACK
// non-premitive data types uses HEAP

// stack uses a copy of the declared variable
// heap uses the reference of the original value

// eg // primitive so it will not change the originall value
let myName = "Dhairya";
let abc = myName;

abc = "Darshan";

// console.log(abc);
// console.log(myName);
// eg // non-primitive so it will change the original value as well

let userName = {
  name: "abhi",
  age: 23,
  email: "pandyaabhi99@gmial.com",
};

let userName1 = {
  name: "dhruv",
  age: 22,
  email: "pandyadhairya789@gmail.com",
};

userName1.email = "DarshanRaval@gmail.com";

// console.log(userName1.email);

// STRING IS AN OBJECT IN JS
const gameName = new String("dhairya is a good boy");
// concat is adding it to the back
console.log(gameName.concat("asdfddffeg"));
console.log(gameName.includes("boy"));

const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

const array = [...str.matchAll(regexp)];
// console.log(array);

const newGame = gameName.repeat(5);
// console.log(newGame);

const gamer = gameName.replace("boy", "girl");
// console.log(gamer);

const toBeTrimmed = " This Needs to be trimmed    ";
// console.log(toBeTrimmed);
const trimmed = toBeTrimmed.toLowerCase();
// console.log(trimmed);
const lowrCase = gameName.toLowerCase();
// console.log(lowrCase);

const data =
  "This is pablo escobar and this is subhuman trafficking and i dont and not at all know what this string is a gonna looks like and wish me best";

console.log(data.split("and"));
