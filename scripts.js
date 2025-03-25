const container = document.querySelector(".container");
let squareSize = 256;

for (let i = 0; i < squareSize; i++) {
  divs = document.createElement("div");
  divs.style.width = "50px";
  divs.style.height = "50px";
  divs.classList.add("divs");
  container.appendChild(divs);
}

const divsDom = document.querySelectorAll(".divs");

const btn = document.querySelector("button");
btn.addEventListener("click", changeSize);

divsDom.forEach((div) => {
  div.addEventListener("mouseover", changeColor);
});

function changeColor(e) {
  const div = e.target;
  let rand1 = getRandomInt(256);
  let rand2 = getRandomInt(256);
  let rand3 = getRandomInt(256);

  let color = "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";

  div.style.backgroundColor = color;
}
function changeSize() {
  const size = prompt("add new grid(lower than 100)");
  let contador = container.childNodes.length;
  const totalSize = (size * size) / 800;
  const sizeString = totalSize.toString();
  console.log(sizeString);
  for (let i = 0; i < contador; i++) {
    container.firstChild.remove();
  }
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      divs = document.createElement("div");
      const totalSize = 800 / size;
      divs.style.width = totalSize + "px";
      divs.style.height = totalSize + "px";
      divs.classList.add("divs");
      divs.addEventListener("mouseover", changeColor);

      container.appendChild(divs);
    }
  }
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
