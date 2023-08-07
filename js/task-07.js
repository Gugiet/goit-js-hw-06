const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");
const spanEl = document.querySelector("span#text");
spanEl.style.fontSize = "56px";

function changeFontSize() {
  const fontSizeValue = fontSizeControl.value;
  textSpan.style.fontSize = `${fontSizeValue}px`;
}

fontSizeControl.addEventListener("input", changeFontSize);
