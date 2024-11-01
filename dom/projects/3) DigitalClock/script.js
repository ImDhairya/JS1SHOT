const display = document.querySelector("#disp");
const time = document.createElement("p");

console.log(display.childNodes);

setInterval(() => {
  const date = new Date();
  time.innerText = date.toLocaleTimeString();

  display.appendChild(time);
}, 1000);
