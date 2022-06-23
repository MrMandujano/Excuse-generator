/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateExcuse = () => {
  const excuse = document.getElementById("excuse");
  const string = `${who[getRandomNumber(0, 3)]} ${
    action[getRandomNumber(0, 3)]
  } ${what[getRandomNumber(0, 2)]} ${when[getRandomNumber(0, 4)]}`;

  excuse.innerHTML = string;
};

window.onload = function() {
  const btnE = document.getElementById("btnE");
  btnE.addEventListener("click", generateExcuse);
  generateExcuse();
};

//write your code here
