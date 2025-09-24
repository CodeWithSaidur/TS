// 04:22:19
// instanceof narrowing
// => check water a object was created from a particuler class
class User {
  constructor(
    public id: number,
    public name: string,
    private email: string
  ) {}
  info() {
    return `Hello ${this.name} Email ${this.email}`
  }
}

class Admin {
  constructor(
    public id: number,
    public name: string,
    private email: string
  ) {}
  info() {
    return `Hello ${this.name} Email ${this.email}`
  }
}

let u1 = new User(1, 'sabed', 'H5cY3@example.com')
// console.log(u1.info())

// console.log(u1 instanceof Admin) // check is u1 'Object' was created from 'Admin' class

if (u1 instanceof User) {
  //   console.log(u1.info())
}

// Type Predicates
type Animals = {
  a: 'Ants'
  b: 'Buffalo'
  c: 'Cat'
}
type Birds = {
  a: 'Albatross'
  b: 'Bald Eagle'
  c: 'Cockatoo'
}

type Either = Animals | Birds

function isAnimal(obj: Either): obj is Animals {
  return obj.a === 'Ants'
}
function isBird(obj: Either): obj is Birds {
  return obj.a === 'Albatross'
}

let p1: Either = {
  a: 'Ants',
  b: 'Buffalo',
  c: 'Cat'
}

console.log(isAnimal(p1)) 
console.log(isBird(p1))

export {}
