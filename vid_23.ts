// 03:47:07
// Generic

// Generic with Clasical function
function fnx2<Type>(params: Array<Type>): Type {
  return params[1]
}
console.log(fnx2([1, 2, 3, 4]))

// Generic with Arrow function
const fnx = <T>(p: T[]): T => {
  return p[0]
}
console.log(fnx([1, 2, 3, 4]))

export {}
