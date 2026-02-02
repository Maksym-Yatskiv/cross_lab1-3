import { Animal } from "./Animal";

export class Cat extends Animal {
    furColor: string;

    constructor(
      name: string,
      age: number,
      speed: number,
      furColor: string
    ) {
      super(name, age, speed);
      this.furColor = furColor;
    }

    meow() {
      return "Мяу!";
    }
}