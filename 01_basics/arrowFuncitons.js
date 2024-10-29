const user = {
  username: "dhairya",
  price: "909",

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
  },
};

user.welcomeMessage();
user.username = "abhi";
user.welcomeMessage();

// this keyword holds the value of current context and can only be used in the objects not posible to write this in funcitons

// this is used to get the current context of an object that we're in, it cannot be used anywhere, like in a function for example

function abc() {
  let username = "dhairya";
  // console.log(this);
}

const chai = () => {
  let username = "hitesh";
  console.log(this);
  console.log(this.username);
};

(function hello() {
  console.log("THis is a says is a iffi function");
})();

for (let i = 1; i <= 20; i++) {
  if (i == 5) {
    console.log(`Detected 5`);
    continue;
  }
  console.log(`Value of i is ${i}`);
}
