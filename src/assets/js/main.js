import { menu } from "./menu.js";
import { port } from "./port.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";
import { rotating } from "./rotating.js";
import { intro } from "./intro.js";

window.addEventListener("load", function () {
  intro();
  rotating();
  smooth();
  link();
  menu();
  port();
});
