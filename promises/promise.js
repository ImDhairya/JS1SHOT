const promiseOne = new Promise((resolve, reject) => {
  // Do an async task
  // DB Calls, cryptography, network calls
  setTimeout(() => {
    console.log("Async task is completed");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("Promise consumed");
});

// second promise

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("This is second promise");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Tota bole teeh teh");
});

// third promise

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({username: "chai", email: "chai@example.com"});
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
});

// GO THROUGH

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({username: "dhairya", password: "12344"});
    } else {
      reject("ERROR SOMETHING WENT WRONG");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Ye toh hona hi tha!!!");
  });

// Promise FIVE

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({username: "Javascript", password: "1234"});
    } else {
      reject("ERROR: JS Went WRONG!!");
    }
  }, 100);
});

async function consumePromiseFive(data) {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

// latest way of doing resolve reject using try catch by async await

async function bringData() {
  try {
    const data = await fetch("asdfasdfdsaf.com");
    const usableData = await data.json();
    console.log(usableData);
  } catch (error) {
    console.log(error);
  }
}
