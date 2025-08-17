function add(a: number, b: number): number {
  return a + b
}
// console.log(add(10, 20))
// ---------------------------------------------------------
const sub = (a: number, b: number): number => a - b
// console.log(sub(10, 20))
// ---------------------------------------------------------
let students = ['Student 1', 'Student 2', 'Student 3']
let greeting = students.map((student: string) => {
  return `Hello ${student}`
})
// console.log(greeting)
// ---------------------------------------------------------

function printError(code: number, message: string): void {
  console.log(`Error ${code}: ${message}`)
}
// printError(404, 'Not Found')

function hendelError(error: string): never {
  throw new Error(error)
}
hendelError('Something went wrong')

export {}
