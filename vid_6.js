"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
// console.log(add(10, 20))
// ---------------------------------------------------------
var sub = function (a, b) { return a - b; };
// console.log(sub(10, 20))
// ---------------------------------------------------------
var students = ['Student 1', 'Student 2', 'Student 3'];
var greeting = students.map(function (student) {
    return "Hello ".concat(student);
});
// console.log(greeting)
// ---------------------------------------------------------
function printError(code, message) {
    console.log("Error ".concat(code, ": ").concat(message));
}
// printError(404, 'Not Found')
function hendelError(error) {
    throw new Error(error);
}
hendelError('Something went wrong');
