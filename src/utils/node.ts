export class Node {
  value: number;
  next?: Node;

  constructor(value: number) {
    this.value = value;
    this.next = undefined;
  }
}
