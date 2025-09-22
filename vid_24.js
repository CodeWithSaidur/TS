"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Fnx(p1, p2) {
    return [p1, p2];
}
console.log(Fnx(1, {
    connection: '123',
    username: 'sabed',
    password: '123'
}));
console.log(Fnx('sabed', {
    connection: '123',
    username: 'sabed',
    password: '123'
}));
var Animals = /** @class */ (function () {
    function Animals() {
        this.animal = [];
    }
    Animals.prototype.add = function (animal) {
        this.animal.push(animal);
    };
    return Animals;
}());
var animal = new Animals();
animal.add('Wonder Serf');
console.log(animal);
