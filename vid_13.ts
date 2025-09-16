// 02:24:04
// Interfaces

interface User {
  readonly id?: number
  name?: string
  email?: string
  startTrail(): string
  getCoupon(couponname: string): number
}

let sabed: User = {
  id: 1,
  name: 'sabed',
  email: 'H5cY3@example.com',
  startTrail() {
    return 'trial started'
  },
  getCoupon(couponname: string) {
    return 10
  }
}
console.log(sabed.startTrail())
export {}
