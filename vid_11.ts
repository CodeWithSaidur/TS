let a: string[] = ['App', 'Banana', 'Cherry'] // only sring array

let b: (string | number)[] = ['App', 1414, 'Banana', 'Cherry', 123] // And array

let c: string[] | number[] = ['App', 'Banana', 'Cherry'] // Or array

// Tuple => a welldefined  structured array

let d: [string, number, boolean] = ['App', 1414, true]

let rgb: [number, number, number] = [255, 255, 255]

// example

type User = [number, string]

let user1: User = [1, 'John Doe']
user1.push(10) // TS does not know during runtime
console.log(user1)

/*
let user2: User = [1]  // not assignable
user2.push('John Doe')
console.log(user2)
*/
export {}
