import { Animal } from "./Animal";

export class Dog extends Animal {
    breed: string;

    constructor(
      name: string,
      age: number,
      speed: number,
      breed: string
    ) {
      super(name, age, speed);
      this.breed = breed;
    }

    bark() {
      return "Гав!";
    }
}