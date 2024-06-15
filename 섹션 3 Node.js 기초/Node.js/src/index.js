// (1) Common JS (CJS)
// const moduleData = require("./math");

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));

// console.log("moduleData");

// (2) 객체 구조분해할당
// const (add, sub) - require("./math");
// console.log(add(1, 2));
// console.log(sub(1, 2));

// (3) ES Module (ESM)
// import mul, { add, sub } from "./math.js";

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(2, 2));

// (4) randomColor 라이브러리
// import mul, { add, sub } from "./math.js";

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);
