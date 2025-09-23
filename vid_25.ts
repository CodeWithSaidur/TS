// 04:07:02
// Narrowing -> Type Guard -> typeof
// => Refining type of a variable if a variable can be mode then one type

let a = 10
function Check_Type(p: number | string) {
  if (typeof p === 'string') {
    return 'The Value is String'
  }
  return a + 10
}
console.log(Check_Type(a))

export {}
