//increments the number in a node's text
import { createHeader } from "./header.js";
import { createMain } from "./main.js";
function increment(node) {
  let current = node.textContent;
  node.textContent = Number(current) + 1;
}

export function App() {
  const body = document.createElement("body");


  body.appendChild(createHeader());


  body.appendChild(createMain());

  const button = body.querySelector("#increment");
  const counter = body.querySelector("#counter");
  button.addEventListener("click", () => {
    increment(counter);
  });

  return body;
}
