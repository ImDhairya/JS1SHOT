// literals are not singleton othre wise it is a singleton

// Object.create // this is constructor method and creates object in singleton
const mySymbol = Symbol("This is the description of the symbol");

const jsUser = {
  name: "Dhairya",
  age: "22",
  "full name": "Dhairya pandya",
  [mySymbol]: "Gimme description",
};

// console.log(jsUser[mySymbol]);
// console.log(mySymbol);

// console.log(jsUser.name);
// console.log(jsUser["name"]);

// Object.freeze(jsUser); // wont let you change any data

// jsUser.name = "Abhishek";

// console.log(jsUser.name);

jsUser.greeting = function () {
  console.log("Hello chal bye");
};

// console.log(jsUser.greeting());

const target = {a: 1, b: 2};
const source = {b: 4, c: 5};

const returnedTarget = Object.assign(target, source);

// console.log(returnedTarget);

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "a", 4: "b"};

const obj3 = Object.assign({}, obj1, obj2);

// console.log(obj3);

const data = {
  name: {
    firstName: "dhairya",
    age: {
      ageData: "43",
    },
  },
};

const obj4 = {...obj1, ...obj2};

const users = [
  {id: 1, email: "abc#gmail.com"},
  {
    id: 2,
    email: "prq#gmail.com",
  },
];

const tinderUser = {
  isLogedIn: false,
};

// console.log(tinderUser.hasOwnProperty("isLogedIn"));

const course = {
  courseName: "js in hindi",
  price: "32",
  cousrsInstructor: "dhairay",
};

const {cousrsInstructor, price, courseName} = course;
console.log(price);
