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

    this.insert(lastEl);
  }
  // aray is sorted in ascending order
  insert(el) {
    if (this.isEmpty() || el > this.peek()) {
      this.push(el);

      return;
    }

    let temp = this.pop();

    this.insert(el);

    this.push(temp);
    return;
  }
  middleElement() {
    // middle=(size/2)+1
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
