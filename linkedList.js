/* Total Programs:
 Linked list: 
    - add element at end
    - remove element at end
    - remove at front 
    - add at n position
    - remove at n position
    - remove by value
    - print list
    - reverse list
        • brute approach
        • optimal approach
        • recursive aproach

 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  addAtEnd(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }
  // add(value, index = this.size){
  // if(index<0&&index>this.size)
  // }
  removAtEnd() {
    let curr = this.head;
    if (curr === null) {
      console.log("No Eleemnt to remove");
    } else if (curr.value && curr.next === null) {
      this.head = null;
    } else {
      let curr = this.head,
        prev = this.head;
      while (curr.next !== null) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = null;
    }
    console.log("Élement removed at end");
  }
  removeAtFront() {
    let curr = this.head;
    if (curr === null) {
      console.log("No Eleemnt to remove");
    } else if (curr.value && curr.next === null) {
      this.head = null;
    } else {
      this.head = this.head.next;
    }
  }
  addAtN(value, position) {
    let node = new Node(value);

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let curr = this.head;
      let counter = 0;
      let prev = null;
      while (counter < position) {
        prev = curr;
        curr = curr.next;

        counter = counter + 1;
      }
      if (counter === position) {
        prev.next = node;
        node.next = curr;
      }
    }
  }
  removeAtN(position) {
    // let node = new Node(value);

    if (position === 0) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      let counter = 0;
      let prev = null;
      while (counter < position) {
        prev = curr;
        curr = curr.next;

        counter = counter + 1;
      }
      if (counter === position) {
        prev.next = curr.next;
      }
    }
  }
  removeByValue(value) {
    if (!this.head) return;

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current !== null && current.value !== value) {
      previous = current;
      current = current.next;
    }

    // reached node with value to be deleted
    if (current !== null) {
      previous.next = current.next;
      this.size--;
    }
  }
  printList() {
    console.log("Elements:");
    if (this.head === null) console.error("No Element in Linked list");
    else if (this.head.value && this.head.next === null) {
      console.log(this.head.value);
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        console.log(curr.value);
        curr = curr.next;
      }
      console.log(curr.value);
    }
  }

  reverseList() {
    // Brute force
    // Simply create new list and add element on front as you traverse the list
    //      Time Complexity: O(n), where n is the number of nodes.
    //      Space Complexity: O(n), for creating a new linked list.

    // 2nd Appraoch
    function reverseListOptimalApproach(head) {
      let prev = null;
      let current = head;

      while (current !== null) {
        let next = current.next; // Store next node
        current.next = prev; // Reverse pointer
        prev = current; // Move prev and current one step forward
        current = next;
      }

      return prev; // New head
    }

    // 3rd Approach
    function reverseListRecursive(head) {
      if (head === null || head.next === null) return head;

      let reversedList = reverseListRecursive(head.next);
      head.next.next = head;
      head.next = null;

      return reversedList;
    }
    return {
      reverseListOptimalApproach,
      reverseListRecursive,
    };
  }
}

const list = new LinkedList();

// list is class reference

list.addAtEnd(1);
list.addAtEnd(10);
list.addAtEnd(20);
list.addAtEnd(30);
list.addAtEnd(66);
// list.printList();
// list.removAtEnd();
// list.printList();
// list.removeAtFront();
// list.printList();
list.addAtN(22, 2);
// list.printList();
// list.removeAtN(2);
list.printList();
const reversedList = list.reverseList;
reversedList.reverseListOptimalApproach(list);
console.log(reversedList);
