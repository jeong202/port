import { menu } from "./menu.js";
import { port } from "./port.js";
import { link } from "./link.js";
import { smooth } from "./smooth.js";
import { rotating } from "./rotating.js";

window.addEventListener("load", function () {
  rotating();
  smooth();
  link();
  menu();
  port();
});
