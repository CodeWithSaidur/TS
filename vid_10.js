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
        return id / 2;
    }
    return id;
}
console.log(Err('123'));
