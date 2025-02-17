class Stack {
  constructor() {
    this.items = [];
  }

  push(el) {
    this.items.push(el);
  }
  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  size() {
    return this.items.length;
  }
  print() {
    console.log(this.items.toString());
  }

  sort() {
    if (this.isEmpty()) return;

    if (this.size() === 1) return this.items;

    let lastEl = this.pop();

    this.sort();

    this.insertAscending(lastEl);
  }
  // aray is sorted in ascending order
  insertAscending(el) {
    if (this.isEmpty() || el > this.peek()) {
      this.push(el);

      return;
    }

    let temp = this.pop();

    this.insertAscending(el);

    this.push(temp);
    return;
  }
  middleElement(k) {
    // k is position of stack from which we are returning Element.
    // middle=(size/2)+1
    if (k === 1) {
      let el = this.pop();
      console.log(`popped out ${el}`);
      return el;
    }
    let temp = this.pop();
    this.middleElement(k - 1);
    this.push(temp);
  }
  reverse() {
    if (this.size() === 0) return;

    let temp = this.pop();
    this.reverse();

    // this will insert at top not bottom wwe need to right
    // cutom insert at bottom
    // this.push(temp);
    this.insertAtBottom(temp);
  }
  insertAtBottom(el) {
    if (this.size() === 0) {
      this.push(el);
      return;
    }
    let temp = this.pop();
    this.insertAtBottom(el);
    this.push(temp);
  }
}

const stack = new Stack();

stack.push(1);
stack.push(12);
stack.push(9);
stack.push(4);
stack.push(90);
stack.push(7);
stack.print();
stack.sort();
stack.print();
stack.middleElement(3);
stack.reverse();
stack.print();
