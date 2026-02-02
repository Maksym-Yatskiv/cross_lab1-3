import { Animal } from "./Animal";
import { Cat } from "./Cat";
import { Dog } from "./Dog";

export type AnimalDTO =
  | {
      name: "Кіт",
      age: number;
      speed: number;
      furColor: string;
    }
  | {
      name: "Собака";
      age: number;
      speed: number;
      breed: string;
    };

export class AnimalFactory {
  public static getAnimal(data: AnimalDTO): Animal {
    if (data.name === "Кіт") {
      return new Cat(data.name, data.age, data.speed, data.furColor)
    }
    else if (data.name === "Собака") {
      return new Dog(data.name, data.age, data.speed, data.breed)
    }
    else throw new Error("Невідома тварина");
  }
}
