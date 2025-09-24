"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 04:22:19
// instanceof narrowing
// => check water a object was created from a particuler class
var User = /** @class */ (function () {
    function User(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    User.prototype.info = function () {
        return "Hello ".concat(this.name, " Email ").concat(this.email);
    };
    return User;
}());
var Admin = /** @class */ (function () {
    function Admin(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    Admin.prototype.info = function () {
        return "Hello ".concat(this.name, " Email ").concat(this.email);
    };
    return Admin;
}());
var u1 = new User(1, 'sabed', 'H5cY3@example.com');
console.log(u1.info());
console.log(u1 instanceof Admin);
