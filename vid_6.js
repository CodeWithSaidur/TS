"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Objects
var User = {
    name: 'John Doe',
    email: 'H5cY3@example.com',
    isActive: true
};
// console.log(User)
function createUser() {
    return {
        name: 'John Doe',
        email: 'H5cY3@example.com',
        isActive: true
    };
}
var newUser = createUser();
console.log(newUser);
