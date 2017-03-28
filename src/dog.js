// @flow

class Dog {
  name: string

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `Woof, I am ${this.name}`
  }
}


export default Dog

// module.exports = Dog
