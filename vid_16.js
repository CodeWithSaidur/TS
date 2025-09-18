"use strict";
// 02:54:00
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    return User;
}());
var u1 = new User(1, 'sabed', 'H5cY3@example.com');
console.log(u1.name);
var Admin = /** @class */ (function () {
    function Admin(id, name, email) {
        id = id;
        name = name;
        email = email;
    }
    return Admin;
}());
var a1 = new Admin(1, 'sabed', 'H5cY3@example.com');
console.log(a1);
