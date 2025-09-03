// readonly, optional, marge types
type User = {
  readonly id: number // not to change
  name: string
  email: string
  age?: number // optional
  isActive: boolean
}

let u1: User = {
  id: 1,
  name: 'John Doe',
  email: 'H5cY3@example.com',
  isActive: true
}
u1.name = 'Jon Son'
// u1.id = 2 // Cannot assign to 'id' because it is a read-only property.
// console.log(u1.name)

// --------------------------------------------------------------------------

type a = {
  _a: number
}
type b = {
  _b: number
}
type c = a &
  b & {
    _c: number
  }
let c1: c = {
  _a: 1,
  _b: 2,
  _c: 3
}
console.log(c1._a)

export {}
