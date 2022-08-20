"use strict";

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el");
let count = 0;
let total = 0;

function increment() {
  count += 1;
  total += 1;
  countEl.textContent = count;
  totalEl.textContent = "TOTAL: " + total;
}
function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = 0;
}

function reset() {
  console.log("clicked");
  count = 0;
  total = 0;
  countEl.textContent = count;
  saveEl.textContent = "Previous entries: ";
  totalEl.textContent = "TOTAL: ";
}
