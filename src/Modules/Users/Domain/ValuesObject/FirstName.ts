export class FirstName {
  constructor(readonly value: string) {
    this.value = value;
  }
  getValue(): string {
    return this.value;
  }
}
