// Objects
const User = {
  name: 'John Doe',
  email: 'H5cY3@example.com',
  isActive: true
}
// console.log(User)

function createUser(): {
  name: string
  email: string
  isActive: boolean
} {
  return {
    name: 'John Doe',
    email: 'H5cY3@example.com',
    isActive: true
  }
}

const newUser = createUser()
console.log(newUser)

export {}
