// any

let a: any = 10
a = 'hello' // not recommended
console.log(a)
// ----------------------------------------
let c: string
function b() {
  return '10'
}
c = b()
console.log(c)

export {}
