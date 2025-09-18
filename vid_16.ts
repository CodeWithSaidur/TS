// 02:54:00
class User {
  id: number
  name: string
  email: string
  constructor(id: number, name: string, email: string) {
    this.id = id
    this.name = name
    this.email = email
  }
}
let u1: User = new User(1, 'sabed', 'H5cY3@example.com')
console.log(u1.name)

export {}
