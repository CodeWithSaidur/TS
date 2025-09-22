// 03:55:06
// Adb Generic
interface Database {
  connection: string
  username: string
  password: string
}

function Fnx<T, U extends Database>(
  p1: T,
  p2: U
): object {
  return [p1, p2]
}

console.log(
  Fnx(1, {
    connection: '123',
    username: 'sabed',
    password: '123'
  })
)

console.log(
  Fnx('sabed', {
    connection: '123',
    username: 'sabed',
    password: '123'
  })
)

class Animals<T> {
  public animal: T[] = []
  add(animal: T) {
    this.animal.push(animal)
  }
}

const animal = new Animals<string>()
animal.add('Wonder Serf')

console.log(animal)

export {}
