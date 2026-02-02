export class Task2 {
  constructor(private a: number, private b: number) {}

  public getOddDivisibleBy17(): string {
    const arr: number[] = [];

    for (let i = this.a; i <= this.b; i++) {
      if (i % 2 !== 0 && i % 17 === 0) {
        arr.push(i);
      }
    }

    const res = arr.join(" ");
    return res;
  }

  public getCount(): string {
    return this.getOddDivisibleBy17().length.toString();
  }
}