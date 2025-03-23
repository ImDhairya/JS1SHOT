// let has a global scope so each execution is done with the help of the

// var has a local scope for execution which creates the scope for a local environment

for (let i = 0; i < 10; i++) {
  setTimeout(() => {
    // console.log(i);
  }, 0);
}

// variable has local scope and that means the setTimeout will be executed after the 0 to 10 iteration is completed.

// rather than printing the values in global scope this will generate 10 setTimeouts put them in stack and then print that 10 times.

for (var i = 0; i < 10; i++) {
  // console.log(i)
  setTimeout(() => {
    // console.log(i);
  }, 0);
}

//

var fullname = "Dhairya Pandya";

var obj = {
  fullname: "Hacker Full Name",

  getFullnameV2: function () {
    console.log(this.fullname);
  },
  getFullnameV4: () => {
    console.log(this.fullname);
  },
};

// console.log(obj.prop.fullname);
// console.log(obj.getFullname());
// console.log(obj.getFullnameV2());

const piyush = {
  name: "Piyush Garg",
  sayName: function () {
    console.log(this.name);
  },
};

const jhon = {
  name: "Dhairya patel",
  age: 4334,
  sayName: function () {
    console.log(this.name);
  },
};

function callName() {
  const age = 44;
  console.log(age);
  console.log(this.age);
  console.log(this.name);
}
hellr;
ooo;

hellr;
hellr;
hellr;
hellr;
hellr;
hellr;
jhon.sayName.call(piyush);
callName.call(jhon);
