'use strict'
// 04:07:02
// Narrowing -> Type Guard -> typeof
// => Refining type of a variable if a variable can be mode then one type
Object.defineProperty(exports, '__esModule', {
  value: true
})
var a = 10
function Check_Type(p) {
  if (typeof p === 'string') {
    return 'The Value is String'
  }
  return a + 10
}
console.log(Check_Type(a))
