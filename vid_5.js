"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// adb functions
function random_3() {
    var val = ['Hello World!', true, 123];
    var i = Math.random() * val.length;
    console.log(typeof val);
    return val[Math.floor(i)];
}
console.log(random_3());
