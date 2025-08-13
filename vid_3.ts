function add(a: number) {
  return a - 10
}
console.log(add(10))

function getUpper(a: string) {
  return a.toLocaleUpperCase()
}
console.log(getUpper('hello'))

const sub = (a: number, b: number, c: number = 0) => {
  return a - b - c
}

console.log(sub(10, 5, 2))
console.log(sub(10, 5))

export {}
