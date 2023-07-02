let btn = document.getElementById("btn");
let body = document.querySelector("body");
let colorNumber=document.getElementById("colorNumber")

btn.addEventListener('click', () => {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  var alpha = Math.random().toFixed(1); // Random alpha value between 0 and 1, rounded to 2 decimal places

  // Construct the RGBA color string
  var rgbaColor = "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";

  // Apply the generated color to the background color of the body
  body.style.backgroundColor = rgbaColor;
  btn.style.backgroundColor=rgbaColor
  colorNumber.innerHTML=rgbaColor
});
