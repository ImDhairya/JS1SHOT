const user = {
  username: "dhairay",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function () {
    console.log("Got user details from database");
    // console.log(`userName: ${this.username}`);
    // console.log(this);
  },
};

console.log(user.username);
console.log(user.getUserDetails());
