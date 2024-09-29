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
console.log(Array.prototype.join.call(arrayLike1, "+")); //a+d++k+
