export class Task1 {
  private nums: number[];

  constructor(a: number, b: number, c: number) {
    this.nums = [a, b, c];
  }

  private allNegativeAndEven(): boolean {
    return this.nums.every(n => n < 0 && n % 2 === 0);
  }

  private product(): number {
    return this.nums.reduce((acc, n) => acc * n, 1);
  }

  public calculate(): string {
    const prod = this.product();

    if (this.allNegativeAndEven()) {
      return prod.toString();
    }

    return (prod * prod).toString();
  }
}