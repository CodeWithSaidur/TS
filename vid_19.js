'use strict'
// 03:15:26
// Access modifier
// Public, private, protected
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function (d, b) {
      if (typeof b !== 'function' && b !== null)
        throw new TypeError(
          'Class extends value ' +
            String(b) +
            ' is not a constructor or null'
        )
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __())
    }
  })()
Object.defineProperty(exports, '__esModule', { value: true })
var Coffee = /** @class */ (function () {
  function Coffee(name, recipe, ingredients) {
    this.name = name
    this.recipe = recipe
    this.ingredients = ingredients
    this.name = name
    this.recipe = recipe
    this.ingredients = ingredients
  }
  Coffee.prototype.normalServe = function () {
    return 'Your '.concat(this.name, ' is ready')
  }
  return Coffee
})()
var SpeialCoffee = /** @class */ (function (_super) {
  __extends(SpeialCoffee, _super)
  function SpeialCoffee(name, recipe, ingredients) {
    return _super.call(this, name, recipe, ingredients) || this
  }
  SpeialCoffee.prototype.specialServe = function () {
    return 'Your '.concat(this.name, ' special is ready')
  }
  return SpeialCoffee
})(Coffee)
// --------------------- Use ----------------------
var c1 = new Coffee('Latte', '123', '123')
console.log(c1.normalServe())
// // Cannot be access becouse its private only accessible
// // within class 'Coffee'
// c1.recipe = '123'
// // Cannot be access becouse its protected only accessible
// // within class 'Coffee' and its subclasses
// c1.ingredients = '123'
console.log(c1)
// --------------------- Use ----------------------
var sc1 = new SpeialCoffee('Latte', '123', '123')
console.log(sc1.normalServe())
console.log(sc1.specialServe())
