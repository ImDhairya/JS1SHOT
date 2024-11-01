const guess = document.querySelector("#guess");
const button = document.querySelector("#submitButton");
const parent = button.parentElement;

button.addEventListener("click", () => {
  // console.log(guess.value);
  numberGenerator();
});

function numberGenerator() {
  const random = Math.floor(Math.random() * 10 + 1);
  console.log(button.getAttributeNames());
  console.log("previous answer", guess.value);
  if (random == guess.value) {
    const para = document.createElement("p");
    // para.innerHTML = "fadsf"
    para.appendChild(
      document.createTextNode(
        `You have succesfully guessed the answer ${guess.value}`
      )
    );
    console.log(button.remove());
    parent.appendChild(para);
  } else {
    console.log("Badde bable");
  }

  console.log(random);
}
