"use strict";
// function add(a: number) {
//   return a - 10
// }
// console.log(add(10))
Object.defineProperty(exports, "__esModule", { value: true });
// function getUpper(a: string) {
//   return a.toLocaleUpperCase()
// }
// console.log(getUpper('hello'))
var sub = function (a, b, c) {
    if (c === void 0) { c = 0; }
    return a - b - c;
};
console.log(sub(10, 5, 2));
console.log(sub(10, 5));
