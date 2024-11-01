let myName = "dhairya";

console.log(myName.length);

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpideyPower: () => {
    console.log(`Spidey power is ${this.spiderman}`);
  },
};

Object.prototype.dhairya = () => {
  console.log(`Dhairya is present in all objects`);
};

heroPower.dhairya();
myHeros.dhairya();

Array.prototype.heyDhairay = () => {
  console.log(`Dhairya says hellow`);
};

myHeros.heyDhairay();
// heroPower.heyDhairay(); // not possible
//           Prototype(checks for all the prototypes and doesent stop until null is found)

//            Object
//              ^
//             ||
//
//    Arrays , String, Function

// This heirarchy is implemented in the objects, object is at heighest level and the other things in js which are also objects that are there those are given the details over which

//                                   INHERITANCE

const User = {
  name: "chai",
  email: "abc@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: false,
  // out dated approach
  /* __proto__ : TeachingSupport */
};

// console.log(TASupport.isAvailable);

// newer Approach

Object.setPrototypeOf(TASupport, User);
console.log(TASupport.email);

let anotherUsername = "THE MR. DHAIRYA PANDYA      ";

String.prototype.trueLength = function () {
  console.log(this);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength();
