"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Union
var id = 123;
id = 123;
id = '123';
var sabed = {
    id: 1,
    name: 'John Doe',
    email: 'H5cY3@example.com',
    isActive: true
};
// ---------------------------------------------------------------------------------
function Err(id) {
    if (typeof id === 'number') {
        return id;
    }
    return id.toUpperCase();
}
// console.log(Err('123'))
// array
var arr1 = [1, 2, 3];
var arr2 = ['123', 21]; // And
var arr3 = ['1', '2', '3']; // Or
var pi = 3.14;
console.log(pi);
var n;
n = 'a';
