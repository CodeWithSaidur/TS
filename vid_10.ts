// Union
let id: number | string = 123
id = 123
id = '123'
// console.log(id);

type User = {
  id: number
  name: string
  email: string
  isActive: boolean
}

type Admin = {
  id: number
  name: string
  email: string
}

let sabed: User | Admin = {
  id: 1,
  name: 'John Doe',
  email: 'H5cY3@example.com',
  isActive: true
}

// ---------------------------------------------------------------------------------

function Err(id: number | string) {
  if (typeof id === 'number') {
    return id
  }
  return id.toUpperCase()
}
// console.log(Err('123'))

// array
const arr1: number[] = [1, 2, 3]
const arr2: (string | number)[] = ['123', 21] // And
const arr3: string[] | number[] = ['1', '2', '3'] // Or

let pi: 3.14 = 3.14
console.log(pi)

let n: 'a' | 'b' | 'c'
n = 'a'
// n = 1 // not assignable

export {}
