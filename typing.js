const textDiv = document.querySelector(".container-text");

function writeText(text) {
  let length = text.length;
  let index = -1;
  let currentText = "";

  setInterval(() => {
    if (index < length - 1) {
      index++;
      currentText = "";
      for (let x = 0; x <= index; x++) {
        currentText += text[x];
      }

      textDiv.setAttribute("data-value", currentText);
    } else {
      index = -1;
      currentText = 0;
    }
  }, 500);
}

writeText("erdem | developer | student");
