const body = document.querySelector("body");
const randomColorCode = () => {
  let randomHEX = "#";
  const hex = "0123456789ABCDEF";
  for (let i = 0; i < 6; i++) {
    let val = Math.floor(Math.random() * 16);
    randomHEX += hex[val];
  }
  console.log(randomHEX);
  body.style.backgroundColor = randomHEX;
};
randomColorCode();
