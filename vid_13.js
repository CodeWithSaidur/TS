'use strict'
// 02:24:04
// Interfaces
Object.defineProperty(exports, '__esModule', { value: true })
var sabed = {
  id: 1,
  name: 'sabed',
  email: 'H5cY3@example.com',
  startTrail: function () {
    return 'trial started'
  },
  getCoupon: function (couponname) {
    return 10
  }
}
console.log(sabed.startTrail())

