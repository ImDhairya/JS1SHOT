const button = document.querySelector("#calculate");

const result = document.querySelector("#result");

function calculateBMI() {
  const height = document.querySelector("#height");
  const weight = document.querySelector("#weight");

  const bmi = (weight.value / (height.value * height.value)) * 703;
  result.innerText = bmi.toFixed(2);
  console.log(height, weight);
}

button.addEventListener("click", calculateBMI);
