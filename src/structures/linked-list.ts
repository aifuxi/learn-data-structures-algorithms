import { isUndefined } from '../utils/check';
import { Node } from '../utils/node';

/**
 * 链表类
 */
class LinkedList {
  /**
   * 链表头节点
   */
  private head?: Node;

  /**
   * 链表尾节点
   */
  private tail?: Node;

  /**
   * 链表长度
   */
  private length: number = 0;

  constructor(value?: number) {
    if (!isUndefined(value)) {
      const node = new Node(value);

      this.head = node;
      this.tail = node;
      this.length += 1;
    }
  }

  /**
   * 向链表末尾添加数据
   */
  append(value: number): boolean {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      if (!isUndefined(this.tail)) {
        this.tail.next = node;
        this.tail = node;
      }
    }

    this.length += 1;

    return true;
  }

  /**
   * 删除链表末尾元素
   */
  pop(): boolean {
    let tmp: Node | undefined = this.head;

    // 判断链表是否为空
    if (this.isEmpty()) {
      return false;
    }

    // 只有1个元素时
    if (this.length === 1) {
      this.head = undefined;
      this.tail = undefined;
      this.length = 0;

      return true;
    }

    // 只有2个元素时
    if (this.length === 2 && this.head?.next) {
      this.head.next = undefined;
      this.tail = this.head;
      this.length -= 1;

      return true;
    }

    // 元素大于等于3个时
    // 先找到末尾元素的前一个, 不是末尾的前一个就一直往下找
    while (!isUndefined(tmp?.next?.next)) {
      tmp = tmp?.next;
    }

    if (tmp?.next) {
      tmp.next = undefined;
      this.length -= 1;

      return true;
    }

    return false;
  }

  /**
   * 判断链表是否为空
   */
  isEmpty() {
    // return this.length === 0
    return isUndefined(this.head);
  }

  /**
   * 打印链表数据
   */
  print() {
    let tmp = this.head;
    let str = '';
    while (!isUndefined(tmp)) {
      str += `${tmp.value} → `;
      tmp = tmp.next;
    }

    console.log(str.slice(0, -2));
  }
}

// ======== append ==============
{
  console.log('======== append ==============');

  const list = new LinkedList();
  list.append(2);
  list.append(5);
  list.append(8);
  list.append(0);
  list.append(999);
  list.append(123);
  list.print();

  console.log('======== append end ============== \n');
}

// ========= pop =================
{
  console.log('========= pop =================');

  const list = new LinkedList();
  // case: 1
  // list.append(2);
  // list.print();
  // console.log('list.pop():', list.pop());
  // list.print();

  // case: 2
  list.append(5);
  list.append(8);
  list.append(0);
  list.append(999);
  list.append(123);
  list.print();
  console.log('list.pop():', list.pop());
  list.print();
  console.log('list.pop():', list.pop());
  list.print();
  console.log('list.pop():', list.pop());
  list.print();
  console.log('list.pop():', list.pop());
  list.print();

  console.log('========= pop end ================= \n');
}
