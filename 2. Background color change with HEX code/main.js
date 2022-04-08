// onload function will be called after all files loaded

window.onload = () => {
  main();
};
// main function call

function main() {
  const background = document.getElementById("root");
  const heading = document.getElementById("heading");
  const btn1 = document.getElementById("bg_color");
  const btn2 = document.getElementById("heading_color");
  const input1 = document.getElementById("bg_hex");
  const input2 = document.getElementById("heading_hex");

  //   event

  btn1.addEventListener("click", function () {
    let hexColor = HEXColorGenerator();
    background.style.backgroundColor = hexColor;
    input1.value = hexColor;
  });
  btn2.addEventListener("click", function () {
    let hexColorText = HEXColorGenerator();
    heading.style.color = hexColorText;
    input2.value = hexColorText;
  });
}

// RGB color code generator function

function HEXColorGenerator() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}

console.log(HEXColorGenerator());
