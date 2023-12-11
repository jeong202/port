import { intro } from "./intro.js";
import { port } from "./port.js";
import { about } from "./about.js"
import { smooth } from "./smooth.js";

window.addEventListener("load", function () {
  intro();
  port();
  about();
  smooth();
});
