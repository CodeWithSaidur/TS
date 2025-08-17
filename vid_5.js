"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(params) {
    return params + 10;
}
// console.log(add(10))
function getUpper(params) {
    return params.toLocaleUpperCase();
}
// console.log(getUpper('hello'))
// console.log(getUpper(10)); // error
function signUp(name, email, isPaid) {
    if (name === void 0) { name = 'N/A'; }
    if (email === void 0) { email = 'N/A'; }
    if (isPaid === void 0) { isPaid = false; }
    return {
        name: name,
        email: email,
        isPaid: isPaid
    };
}
var a = signUp('John', '', true);
console.log(a);
