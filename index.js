const colorPicker = document.getElementById("color-picker");
const colorSchemeMode = document.getElementById("color-scheme-mode");
const btn = document.getElementById("color-scheme-btn");
let chosenColor = "#F55A5A";
// colors
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let color3 = document.getElementById("color3");
let color4 = document.getElementById("color4");
let color5 = document.getElementById("color5");
// hex-codes
let hexCode1 = document.getElementById("hex-code1");
let hexCode2 = document.getElementById("hex-code2");
let hexCode3 = document.getElementById("hex-code3");
let hexCode4 = document.getElementById("hex-code4");
let hexCode5 = document.getElementById("hex-code5");

// add event listener to the button
btn.addEventListener("click", () => {
  chosenColor = colorPicker.value.replace("#", "");

  // get data from the API based on the selected color
  // the count fetched from the API returns 4 different colors, so not including chosenColor
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${chosenColor}&mode=${colorSchemeMode.value}&count=4`
  )
    .then((res) => res.json())
    .then((data) => {
      setPalette(data);
    });
});

// set the palette based on the selected color
function setPalette(data) {
  color1.style.backgroundColor = colorPicker.value;
  hexCode1.textContent = colorPicker.value.toUpperCase();

  color2.style.backgroundColor = data.colors[0].hex.value;
  hexCode2.textContent = data.colors[0].hex.value;

  color3.style.backgroundColor = data.colors[1].hex.value;
  hexCode3.textContent = data.colors[1].hex.value;

  color4.style.backgroundColor = data.colors[2].hex.value;
  hexCode4.textContent = data.colors[2].hex.value;

  color5.style.backgroundColor = data.colors[3].hex.value;
  hexCode5.textContent = data.colors[3].hex.value;
}

document.querySelectorAll(".hex-codes").forEach((hexCode) => {
  console.log(hexCode.textContent);
  hexCode.addEventListener("click", () => {
    navigator.clipboard.writeText(`${hexCode.textContent}`).then(() => {
      alert(`${hexCode.textContent} copied to clipboard`);
    });
  });
});
