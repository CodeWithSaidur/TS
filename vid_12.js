"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
var Gender;
(function (Gender) {
    Gender["Male"] = "M";
    Gender["Female"] = "F";
})(Gender || (Gender = {}));
var g1 = Gender.Male;
// console.log(g1)
var A;
(function (A) {
    A[A["a"] = 90] = "a";
    A[A["b"] = 91] = "b";
    A[A["c"] = 92] = "c";
})(A || (A = {}));
console.log(A.b);
