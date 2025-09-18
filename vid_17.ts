// 03:02:09
class Admin {
  constructor(
    readonly id: number,
    public name: string,
    private email: string
  ) {
    this.id = id
    this.name = name
    this.email = email
  }

  info() {
    return `His Name ${this.name} email is ${this.email}`
  }

}

let Adm1 = new Admin(1, 'sabed', 'sabed@.com')
// Adm1.email = 'sabed@.com' // can't accessable because private
// Adm1.id = 2 // can't change because readonly
Adm1.name = 'Jabed'

console.log(Adm1.info());

export {}
