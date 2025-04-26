const inputNameElem = document.querySelector("#name-input");
inputNameElem.addEventListener("input", handleInputNameElemEvent);

const outputNameElem = document.querySelector("#name-output");

function handleInputNameElemEvent(e) {
  const name = e.target.value.trim();

  if (name) {
    outputNameElem.textContent = name;
  } else {
    outputNameElem.textContent = "Anonymous";
  }
}
