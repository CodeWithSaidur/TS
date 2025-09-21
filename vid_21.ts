// 03:25:00
// Abstract Class => Abstract classess con't create there object but they help define the structure of the class

abstract class TakePhoto {
  constructor(
    public captured_by: string,
    public location: string,
    public time: string
  ) {}

  abstract info(): void
}

class Insta extends TakePhoto {
  constructor(
    captured_by: string,
    location: string,
    time: string,
    public insta_id: string
  ) {
    super(captured_by, location, time)
  }

  info(): void {
    console.log(
      `Captured by ${this.captured_by} at ${this.location} at ${this.time}`
    )
  }
}

const insta = new Insta(
  'Sabed',
  'Assam',
  '10am',
  'Insta_sabed'
)

// insta.info()

// --------------------------------- 2 ---------------------------------------

abstract class Animal {
  abstract makeSound(): void

  move(): void {
    console.log('All animals are moving')
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Woof Woof')
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow Meow')
  }
}

// let Animal1 = new Animal() // Abstract class can't create object

let Dog1 = new Dog()
Dog1.makeSound()
Dog1.move()

export {}
