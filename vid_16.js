"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 02:54:00
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
