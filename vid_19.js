"use strict";
// 03:15:26
// Access modifier
// Public, private, protected
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
var Coffee = /** @class */ (function () {
    function Coffee(name, // public by default accessible anywhaer (inside a class , outside a class, child class)
    recipe, // accessable only inside a class where its declared
    ingredients // accessable inside the class and its child classes
    ) {
        this.name = name;
        this.recipe = recipe;
        this.ingredients = ingredients;
        this.name = name;
        this.recipe = recipe;
        this.ingredients = ingredients;
    }
    Coffee.prototype.normalServe = function () {
        return "Your ".concat(this.name, " is ready");
    };
    return Coffee;
}());
var SpeialCoffee = /** @class */ (function (_super) {
    __extends(SpeialCoffee, _super);
    function SpeialCoffee(name, recipe, ingredients, tag, off) {
        var _this = _super.call(this, name, recipe, ingredients) || this;
        _this.tag = tag;
        _this.off = off;
        return _this;
    }
    SpeialCoffee.prototype.specialServe = function () {
        return "Your ".concat(this.name, " special is ready tag ").concat(this.tag, " off ").concat(this.off, "%");
    };
    return SpeialCoffee;
}(Coffee));
// --------------------- Use ----------------------
var c1 = new Coffee('Latte', '123', '123');
console.log(c1.normalServe());
console.log(c1);
// --------------------- Use ----------------------
var sc1 = new SpeialCoffee('Latte', '123', '123', 'Chocolate', 50);
console.log(sc1.normalServe());
console.log(sc1.specialServe());
