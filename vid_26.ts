// 04:16:05
// Narrowing Abd
interface User {
  name: string
  email: string
}

interface Admin {
  name: string
  email: string
  role: string
}

function isAdmin(Acc: User | Admin): object {
  if ('role' in Acc) {  // chech is role in Acc
    return {
      Name: Acc.name,
      Email: Acc.email,
      Role: Acc.role,
      Dasignation: 'Admin'
    }
  } else {
    return {
      Name: Acc.name,
      Email: Acc.email,
      Dasignation: 'User'
    }
  }
}

console.log(
  isAdmin({
    name: 'Sabed',
    email: 'Sabed@gmail.com'
  })
)

export {}
