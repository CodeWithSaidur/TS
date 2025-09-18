"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 03:02:09
var Admin = /** @class */ (function () {
    function Admin(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.id = id;
        this.name = name;
        this.email = email;
    }
    Admin.prototype.info = function () {
        return "His Name ".concat(this.name, " email is ").concat(this.email);
    };
    return Admin;
}());
var Adm1 = new Admin(1, 'sabed', 'sabed@.com');
// Adm1.email = 'sabed@.com' // can't accessable because private
// Adm1.id = 2 // can't change because readonly
Adm1.name = 'Jabed';
console.log(Adm1.info());
