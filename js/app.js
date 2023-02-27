function getPin() {
  let randomNumber = generatePin();
  let pin = randomNumber + "";
  if (pin.length === 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  let random = Math.round(Math.random() * 10000);
  return random;
}

document.getElementById("generate-btn").addEventListener("click", () => {
  let displayValue = document.getElementById("display-value");
  let pin = getPin();
  displayValue.value = pin;
});

document.getElementById("calculator").addEventListener("click", (e) => {
  let number = e.target.innerText;
  let inputValue = document.getElementById("input-value");
  let preInputValue = inputValue.value;
  if (isNaN(number)) {
    if (number === "C") {
      inputValue.value = "";
    } else if (number === "<") {
      let newNumber = preInputValue.split();
      newNumber.pop();

      let remainNumber = newNumber.join("");
      inputValue.value = remainNumber;
    }
  } else {
    let nowInputvalue = preInputValue + number;
    inputValue.value = nowInputvalue;
  }
});

document.getElementById("verify-btn").addEventListener("click", () => {
  let displayValue = document.getElementById("display-value");
  let displayValueNumber = displayValue.value;
  let inputValue = document.getElementById("input-value");
  let inputValueNumber = inputValue.value;

  let successBtn = document.getElementById("pin-success");
  let failBtn = document.getElementById("pin-failure");

  if (displayValueNumber === inputValueNumber) {
    successBtn.style.display = "block";
    failBtn.style.display = "none";
  } else {
    failBtn.style.display = "block";
    successBtn.style.display = "none";
  }
});
