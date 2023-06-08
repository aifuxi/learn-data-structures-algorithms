import { isNil } from '../utils/check.mjs';
import { Node } from '../utils/node.mjs';

class LinkedList {
  /**
   * @type {Node}
   */
  head = undefined;

  /**
   * @type {Node|undefined}
   */
  tail = undefined;

  /**
   * @type {number}
   */
  length = 0;

  constructor(value) {
    if (!isNil(value)) {
      const node = new Node(value);

      this.head = node;
      this.tail = node;
      this.length += 1;
    }
  }

  append(value) {
    const node = new Node(value);

    if (isNil(this.head)) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length += 1;
  }

  print() {
    let tmp = this.head;
    let str = '';
    while (!isNil(tmp)) {
      str += `${tmp.value} → `;
      tmp = tmp.next;
    }

    console.log(str.slice(0, -2));
  }
}

const list1 = new LinkedList(0);
list1.print();
list1.append(2);
list1.append(5);
list1.append(8);
list1.append(0);
list1.append(999);
list1.append(123);
list1.print();
