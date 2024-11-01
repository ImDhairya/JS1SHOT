const div = document.createElement("div");
const body = document.querySelector("body");
window.addEventListener(
  "keydown",
  (e) => {
    div.innerHTML = `${e.code}`;
    body.appendChild(div);
    console.log(e.code);
  },
  false
);
