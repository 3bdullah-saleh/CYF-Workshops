//increments the number in a node's text
import { createHeader } from "./header.js";
import { createMain } from "./main.js";
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}
//decrement the number in a node's text
function decrement(node) {
  let current = node.textContent;
  node.textContent = Number(current) - 1;
}

export function App() {
  const body = document.createElement("body");


  body.appendChild(createHeader());


  body.appendChild(createMain());

  const incrementButton = body.querySelector("#increment");
  const decrementButton = body.querySelector("#decrement");
  const counter = body.querySelector("#counter");

  incrementButton.addEventListener("click", () => {
    increment(counter);
  });
  decrementButton.addEventListener("click", () => {
    decrement(counter);
  });

  return body;
}
