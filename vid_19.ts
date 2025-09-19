// 03:15:26
// Access modifier
// Public, private, protected

class Coffee {
  constructor(
    public name: string,
    private recipe: string,
    protected ingredients: string
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
  constructor(
    name: string,
    recipe: string,
    ingredients: string,
    public tag: string,
    public off: number
  ) {
    super(name, recipe, ingredients)
  }

  specialServe() {
    return `Your ${this.name} special is ready tag ${this.tag} off ${this.off}%`
  }
}

// --------------------- Use ----------------------
let c1 = new Coffee('Latte', '123', '123')
console.log(c1.normalServe())
console.log(c1)

// --------------------- Use ----------------------
let sc1 = new SpeialCoffee('Latte', '123', '123', 'Chocolate', 50)
console.log(sc1.normalServe())
console.log(sc1.specialServe())

export {}
