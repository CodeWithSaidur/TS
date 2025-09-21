// Generic

const score: Array<number> = []
const names: Array<string> = []

function fnx(arg: any): any {
  // not recommended
  return arg
}

// Generic => input data type === output data type
// Generic make sure that input data type === output data type
function fnx2<Type>(val: Type): Type {
  return val
}

fnx2(123)

export {}
