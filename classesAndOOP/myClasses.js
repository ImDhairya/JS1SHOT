class User {
  // when we use 'new' keyword we have this constructor called

  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  // this is called method in classes
  encryptPassword() {
    return `${this.password}abc`;
  }

  changeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const coffee = new User("coffee", "coffee@gmail.com", "12345");

console.log(coffee.encryptPassword());
console.log(coffee.changeUsername());

// -------------------------------------------------------------------------------------------

// Now we will see how this syntactic sugar is added into the class then how is it performed behind the scenes

function UserNew(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

UserNew.prototype.encryptPassword = function () {
  return `${this.username}abc`;
};

UserNew.prototype.changeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const animal = new UserNew("dog", "dog@gmail.com", "322231");

console.log(animal.encryptPassword());
console.log(animal.changeUsername());
