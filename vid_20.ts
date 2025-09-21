// 3:19:18 // interface and class

// interface
interface User {
  id: number
  name: string
  email: string
  login(id: number): void
}
let u1: User = {
  id: 1,
  name: 'sabed',
  email: 'sabed@gmail.com',
  login(id: number) {
    console.log(`login ${this.name} Param ${id} | This Id ${this.id}`)
  }
}
// u1.login(10)

// class
class Person {
  constructor(
    private id: number,
    private name: string,
    private email: string
  ) {}
  login(id: number) {
    console.log(`login ${this.name} Param ${id} | This Id ${this.id}`)
  }
}

let p1: Person = new Person(1, 'sabed', 'sabed@gmail.com')
// p1.login(10)

// interface + class
interface Employee {
  id: number
  name: string
  work(): void
}

class Devoloper implements Employee {
  id: number
  name: string
  language: string // we can add more properties but not remove exist properties
  constructor(id: number, name: string, language: string) {
    this.id = id
    this.name = name
    this.language = language
  }
  work() {
    console.log(`${this.name} is coding in ${this.language}`)
  }
}

let d1: Devoloper = new Devoloper(1, 'sabed', 'JS')
d1.work()

export {}
