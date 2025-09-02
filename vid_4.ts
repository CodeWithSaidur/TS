// functions

function add(a: number, b: number): number {
  return a + b
}

console.log(add(10, 20))

// ----------------------------------

function signup(name: string, email: string, password: string) {
  console.log(name, email, password)
}

signup('John Doe', 'H5cY3@example.com', '123456')
// --------------------------------------------

let login = (name: string, email: string): Object => {
  return {
    Name: name,
    Email: email
  }
}
console.log(login('John Doe', 'H5cY3@example.com'))

export {}
