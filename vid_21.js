"use strict";
// 03:25:00
// Abstract Class => Abstract classess con't create there object but they help define the structure of the class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TakePhoto = /** @class */ (function () {
    function TakePhoto(captured_by, location, time) {
        this.captured_by = captured_by;
        this.location = location;
        this.time = time;
    }
    return TakePhoto;
}());
var Insta = /** @class */ (function (_super) {
    __extends(Insta, _super);
    function Insta(captured_by, location, time, insta_id) {
        var _this = _super.call(this, captured_by, location, time) || this;
        _this.insta_id = insta_id;
        return _this;
    }
    Insta.prototype.info = function () {
        console.log("Captured by ".concat(this.captured_by, " at ").concat(this.location, " at ").concat(this.time));
    };
    return Insta;
}(TakePhoto));
var insta = new Insta('Sabed', 'Assam', '10am', 'Insta_sabed');
// insta.info()
// --------------------------------- 2 ---------------------------------------
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.move = function () {
        console.log('All animals are moving');
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeSound = function () {
        console.log('Woof Woof');
    };
    return Dog;
}(Animal));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.makeSound = function () {
        console.log('Meow Meow');
    };
    return Cat;
}(Animal));
var Dog1 = new Dog();
Dog1.makeSound();
Dog1.move();
