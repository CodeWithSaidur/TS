"use strict";
// Getters and Setters
// 03:08:15
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, name, email, role) {
        if (role === void 0) { role = "it's a User"; }
        this.id = id;
        this.name = name;
        this.email = email;
        this.role = role;
    }
    Object.defineProperty(User.prototype, "Email_Get", {
        //   Getter
        get: function () {
            return this.email.toUpperCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Email_Set", {
        //   Setter
        set: function (v) {
            this.email = v;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User(1, 'sabed', 'sabed@gmail.com');
// getter
console.log(user.Email_Get);
// setter
user.Email_Set = 'sabed121@gmail.com';
console.log(user.Email_Get);
