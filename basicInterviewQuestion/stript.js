const changeText = document.getElementById("hello");
const arr = ["hel", "sdsd", "dsf", "ddddddd"];
// changeText.innerText = "HEY GAY";
let i = 0;

changeText.onclick = () => {
  changeText.innerText = arr[i];
  i = (i + 1) % arr.length;
};
