export abstract class Animal {
  name: string;
  age: number;
  speed: number;

  constructor(name: string, age: number, speed: number) {
    if (age < 0 ) throw new Error("Вік не може бути від'ємним");
    if (!Number.isInteger(age) ) throw new Error("Вік має бути цілим числом!");
    if (speed < 0 ) throw new Error("Швидкість не може бути від'ємною");

    this.name = name;
    this.age = age;
    this.speed = speed;
  }

  getName() { return this.name; }
  getSpeed() { return this.speed; }

  displayInfo() { 
    return "Назва: " + this.name + 
    " Вік: " + this.age + 
    " Швидкість: " + this.speed 
  }
}