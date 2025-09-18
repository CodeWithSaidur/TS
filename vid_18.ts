// Getters and Setters
// 03:08:15

class User {
  constructor(
    public id: number,
    public name: string,
    private email: string,
    public readonly role: string = "it's a User"
  ) {}

  //   Getter
  get Email_Get(): String {
    return this.email.toUpperCase()
  }

  //   Setter
  set Email_Set(email: string) {
    this.email = email
  }
}
const user = new User(1, 'sabed', 'sabed@gmail.com')

// getter call
console.log(user.Email_Get)

// setter set
user.Email_Set = 'sabed121@gmail.com'
console.log(user.Email_Get)

export {}
