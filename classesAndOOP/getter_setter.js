class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get password() {
    return this._password.toUpperCase();
  }

  set password(value) {
    return (this._password = value.toUpperCase());
  }
}

// getter is from the outside prespective, the outside function is asking for the password from user

// setter is for the insiders job the insider function is asking to set the value

const dhairya = new User("dhairya@gmail.com", "123");
console.log(dhairya.password);
