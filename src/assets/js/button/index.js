import Cursor from "../cursor";
import ButtonCtrl from "./buttonCtrl";

// initialize custom cursor on magnetic buttons
const cursor = new Cursor(document.querySelector(".cursor"));
const button = new ButtonCtrl(document.querySelector(".button"));
const button2 = new ButtonCtrl(document.querySelector(".button_2"));
const button3 = new ButtonCtrl(document.querySelector(".button_3"));

// initialize custom cursor on hero buttons
const buttonArray = document.getElementsByTagName("button");

for (let i = 0; i < buttonArray.length; i++) {
  buttonArray.item(i).addEventListener("mouseover", () => {
    cursor.enter();
  });

  buttonArray.item(i).addEventListener("mouseout", () => {
    cursor.leave();
  });
}

const name = document.querySelector(".name-container");
name.addEventListener("mouseover", () => {
  cursor.enter();
});
name.addEventListener("mouseout", () => {
  cursor.leave();
});

const header = document.querySelectorAll(".header__button");

for (let i = 0; i < header.length; i++) {
  header.item(i).addEventListener("mouseover", () => {
    cursor.enter();
  });

  header.item(i).addEventListener("mouseout", () => {
    cursor.leave();
  });
}
