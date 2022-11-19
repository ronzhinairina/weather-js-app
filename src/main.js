'use strict';

import { registerComponents } from "./component-register";

function main() {
  registerComponents();
  document.getElementById('app').innerHTML = `<app-layout></app-layout>`
}

main();
