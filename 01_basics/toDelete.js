const promise = new Promise((resolve, rejct) => {
  setTimeout(() => {
    resolve({user: "dhairya", email: "pandyadhairya789@gmail.com"});
  }, 1000);
});

promise.then((user) => {
  console.log("Ye hui na baat", user);
});
