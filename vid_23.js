"use strict";
// 03:47:07
// Generic
Object.defineProperty(exports, "__esModule", { value: true });
// Generic with Clasical function
function fnx2(params) {
    return params[1];
}
console.log(fnx2([1, 2, 3, 4]));
// Generic with Arrow function
var fnx = function (p) {
    return p[0];
};
console.log(fnx([1, 2, 3, 4]));
