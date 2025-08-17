function add(params: number): number {
  return params + 10
}
// console.log(add(10))

function getUpper(params: string) {
  return params.toLocaleUpperCase()
}

// console.log(getUpper('hello'))
// console.log(getUpper(10)); // error

function signUp(
  name: string = 'N/A',
  email: string = 'N/A',
  isPaid: boolean = false
): object {
  return {
    name: name,
    email: email,
    isPaid: isPaid
  }
}

let a: object = signUp('John', '', true)

console.log(a)

export {}
