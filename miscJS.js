const arrayLike = {
  0: "a",
  1: "b",
  length: 2,
};
// console.log(Array.prototype.join.call(arrayLike, "+")); //a+b

const arrayLike2 = {
  0: "a",
  1: "b",
  1: "b",
  1: "b",
  0: "b",
  length: 5,
};
// console.log(Array.prototype.join.call(arrayLike2, "+")); //  b+b+++

const arrayLike1 = {
  0: "a",
  1: "b",
  1: "b",
  1: "d",
  3: "k",
  length: 5,
};
// console.log(Array.prototype.join.call(arrayLike1, "+")); //a+d++k+

// let book = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   published: 1960,
// };

// console.log("check", book.title, book["title"]);

function changeToEight(n) {
  n = 8; // whatever n was, it is now 8... but only in this function!
}

let n = 7;

changeToEight(n);

// console.log(n);

const car = {
  numberOfDoors: 4,
  drive: function () {
    console.log(`Get in one of the ${this.numberOfDoors} doors, and let's go!`);
  },
};

const letsRoll = car.drive;

car.drive();
letsRoll();
