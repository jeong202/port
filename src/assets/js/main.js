import { intro } from "./intro.js";
import { port } from "./port.js";
import { about } from "./about.js"
import { tech } from "./tech.js"
import { info } from "./info.js"
import { contact } from "./contact.js";
import { smooth } from "./smooth.js";

window.addEventListener("load", function () {
  intro();
  port();
  about();
  tech();
  info();
  contact();
  smooth();
});
