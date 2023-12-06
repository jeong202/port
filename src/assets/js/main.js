import { intro } from "./intro.js";
import { port } from "./port.js";
import { smooth } from "./smooth.js";

window.addEventListener("load", function () {
  intro();
  smooth();
  port();
});
