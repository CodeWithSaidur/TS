// 03:15:26
// Access modifier
// Public, private, protected

class Coffee {
  constructor(
    public name: string, // public by default accessible anywhaer (inside a class , outside a class, child class)
    private recipe: string, // accessable only inside a class where its declared
    protected ingredients: string // accessable inside the class and its child classes
  ) {
    this.name = name
    this.recipe = recipe
    this.ingredients = ingredients
  }

  normalServe() {
    return `Your ${this.name} is ready`
  }
}

class SpeialCoffee extends Coffee {
  constructor(name: string, recipe: string, ingredients: string) {
    super(name, recipe, ingredients)
  }

  specialServe() {
    return `Your ${this.name} special is ready`
  }
}

// --------------------- Use ----------------------
let c1 = new Coffee('Latte', '123', '123')
console.log(c1.normalServe())
console.log(c1)

// --------------------- Use ----------------------
let sc1 = new SpeialCoffee('Latte', '123', '123')
console.log(sc1.normalServe())
console.log(sc1.specialServe())
export {}
