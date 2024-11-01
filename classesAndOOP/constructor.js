// here the new keyword is the constructor
const promise1 = new Promise((resolve, reject) => {});

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  return this;
}

const userOne = new User("abc", 5, true);
const userTwo = new User("abhi", 15, false);
console.log(userOne);

//  On printing userOne the values are overwritten by user two that gives serious anxiety that even on printing userOne the code is giving out the ouptut of userTwo
