function addTwoNumber(num1 = 10, num2 = 10) {
  console.log(num1 + num2);
}

// addTwoNumber();

function calculateCartPrice(val1, val2, ...number) {
  return number;
}

// console.log(calculateCartPrice(32, 423, 5434, 223, 32));

function one() {
  const username = "dhairay";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  console.log(website);

  two();
}

one();
