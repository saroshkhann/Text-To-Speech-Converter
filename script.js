"use strict";

const btn = document.querySelector(".text__to__speech--btn");
const input = document.querySelector(".text__to__speech--input");
function speak() {
  const text = document.querySelector(".text__to__speech--input").value;
  let utterancee = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterancee);
}

btn.addEventListener("click", function () {
  speak();
  input.value = "";
});

document
  .querySelector(".text__to__speech--input")
  .addEventListener("click", function (e) {
    this.placeholder = "";
  });
