"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// adb functions
function random_3() {
    var val = ['Hello World!', true, 123];
    var i = Math.random() * val.length;
    return val[Math.floor(i)];
}
console.log(random_3());
// -----------------------------------------------------------------
var heros = ['ironman', 'thor', 'spiderman', 'hulk'];
function H() {
    return heros.map(function (hero) {
        return "Hero is ".concat(hero);
    });
}
console.log(H());
