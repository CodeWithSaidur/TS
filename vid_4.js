"use strict";
// functions
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
// ----------------------------------
function signup(name, email, password) {
    console.log(name, email, password);
}
signup('John Doe', 'H5cY3@example.com', '123456');
// --------------------------------------------
var login = function (name, email) {
    return {
        'Name': name,
        'Email': email
    };
};
console.log(login('John Doe', 'H5cY3@example.com'));
