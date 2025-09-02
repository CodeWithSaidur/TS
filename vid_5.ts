// adb functions
function random_3(): string | number | boolean {
  let val = ['Hello World!', true, 123]
  let i = Math.random() * val.length

  return val[Math.floor(i)]
}
console.log(random_3())
// -----------------------------------------------------------------

export {}
