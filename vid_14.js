"use strict";
// 02:34
// Interfaces 2
Object.defineProperty(exports, "__esModule", { value: true });
var sabed = {
    id: 1,
    name: 'sabed',
    email: 'H5cY3@example.com',
    isActive: true,
    startTrail: function () {
        return 'trial started';
    },
    getCoupon: function (couponname) {
        return 10;
    }
};
var sabedAdm = {
    id: 1,
    name: 'sabed',
    email: 'H5cY3@example.com',
    isActive: true,
    startTrail: function () {
        return 'trial started';
    },
    getCoupon: function (couponname) {
        return 10;
    },
    role: 'admin'
};
console.log(sabed.startTrail());
