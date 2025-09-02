// Type Aliases

type User = {
  name: string
  email: string
  isActive: boolean
}

function createUser(user: User) {
  return user
}

let newUser = createUser({
  name: 'John Doe',
  email: 'H5cY3@example.com',
  isActive: true
})

console.log(newUser)

export {}
