function SetUsername(username) {
  this.username = username;
}

function createUser(username, email, password) {
  // SetUsername(username);
  // Inside the call stack when we call the setUsername function it is called, but the data that is there is removed as soon as the stack is completed and the useranme is lost there and which won't be able to last till the createUser function

  SetUsername.call(this, username);

  this.email = email;
  this.password = password;
}

const abc = new createUser("dhairya", "dhairya@gmail.com", "34323");

console.log(abc);
