// 02:34
// Interfaces 2

interface User {
  readonly id: number
  name: string
  email?: string
  startTrail(): string
  getCoupon(couponname: string): number
}

interface User {
  // reopening of the interface
  isActive?: boolean
}

interface Admin extends User {
  role: string
}

let sabed: User = {
  id: 1,
  name: 'sabed',
  email: 'H5cY3@example.com',
  isActive: true,
  startTrail() {
    return 'trial started'
  },
  getCoupon(couponname: string) {
    return 10
  }
}

let sabedAdm: Admin = {
  id: 1,
  name: 'sabed',
  email: 'H5cY3@example.com',
  isActive: true,
  startTrail() {
    return 'trial started'
  },
  getCoupon(couponname: string) {
    return 10
  },
  role: 'admin'
}

console.log(sabed.startTrail())
export {}
