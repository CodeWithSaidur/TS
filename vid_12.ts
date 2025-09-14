// enum
enum Direction {
  Up,
  Down,
  Left,
  Right
}

enum Gender {
  Male = 'M',
  Female = 'F'
}
let g1 = Gender.Male
// console.log(g1)

enum A {
  a = 90,
  b, // it willbe 91
  c // ans so on
}

console.log(A.b)

export {}
