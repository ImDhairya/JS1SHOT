const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

descriptor.writable = true;
console.log(descriptor);
Math.PI = 534;
console.log(Math.PI);

// the properties like writeable or enumerable is so well hardcoded that you cannot change it cause it is in so many layers of js that its not posiable to change these properties

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
};

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

Object.defineProperty(chai, "name", {
  writable: false,
  enumerable: false,
  configurable: true,
});

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));
