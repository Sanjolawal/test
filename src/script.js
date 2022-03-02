let ColorArray = ["red", "blue", "orange", "violet", "indigo", "pink"];
let main = document.querySelector("#main");
let text = document.querySelector("#text");
let button = document.querySelector("#button");

let a = 0;

let Show = () => {
  main.style.background = ColorArray[a];
  a = a + 1;
  if (a > 5) {
    a = 0;
  }
};

button.addEventListener("click", Show);
