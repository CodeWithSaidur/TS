"use strict";
// 3:19:18 // interface and class
Object.defineProperty(exports, "__esModule", { value: true });
var u1 = {
    id: 1,
    name: 'sabed',
    email: 'sabed@gmail.com',
    login: function (id) {
        console.log("login ".concat(this.name, " Param ").concat(id, " | This Id ").concat(this.id));
    }
};
// u1.login(10)
// class
var Person = /** @class */ (function () {
    function Person(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    Person.prototype.login = function (id) {
        console.log("login ".concat(this.name, " Param ").concat(id, " | This Id ").concat(this.id));
    };
    return Person;
}());
var p1 = new Person(1, 'sabed', 'sabed@gmail.com');
var Devoloper = /** @class */ (function () {
    function Devoloper(id, name, language) {
        this.id = id;
        this.name = name;
        this.language = language;
    }
    Devoloper.prototype.work = function () {
        console.log("".concat(this.name, " is coding in ").concat(this.language));
    };
    return Devoloper;
}());
var d1 = new Devoloper(1, 'sabed', 'JS');
d1.work();
