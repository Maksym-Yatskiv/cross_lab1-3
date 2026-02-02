export class Task3 {
  matrix: number[][] = [];
  n: number = 0;

  constructor(n: number) {
    if (n < 30) {
      this.n = n;

      this.generate();
    }
  }

  private generate(): void {
    this.matrix = Array.from({ length: this.n }, () =>
      Array.from({ length: this.n }, () =>
        Math.floor(Math.random() * 1000) - 500
      )
    );
  }

  public isHighlighted(value: number): boolean {
    return value < 0 && value % 2 === 0 && value % 7 === 0;
  }
}