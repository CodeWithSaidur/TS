// adb functions
function random_3(): string | number | boolean {
  let val = ['Hello World!', true, 123]
  let i = Math.random() * val.length

  return val[Math.floor(i)]
}
console.log(random_3())
// -----------------------------------------------------------------

const heros = ['ironman', 'thor', 'spiderman', 'hulk']
function H(): string[] {
  return heros.map((hero): string => {
    return `Hero is ${hero}`
  })
}
console.log(H())

export {}
