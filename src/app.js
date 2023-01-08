/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];

  let excusa = "";

  let num = Math.floor(Math.random() * who.length - 1);
  excusa = who[num] + "";

  num = Math.floor(Math.random() * action.length - 1);
  excusa = excusa + action[num];

  num = Math.floor(Math.random() * what.length - 1);
  excusa = excusa + what[num];

  num = Math.floor(Math.random() * when.length - 1);
  excusa = excusa + "";

  document.getElementById("excusa").innerText = excusa;

  console.log(excusa);
};
