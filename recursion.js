// Print 1 to n using recursion
//  Print n to 1 using recursion

// factorial of number returning output
// factorial of number printing output

// sort array
//     asscending
//     descending

function print1toN(n) {
  if (n === 1) {
    console.log(1);
    return;
  }

  print1toN(n - 1);
  console.log(n);
}
// print1toN(5)

function printNto1(n) {
  if (n === 1) {
    console.log(n);
    return;
  }

  console.log(n);
  printNto1(n - 1);
}

// printNto1(4);

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  let value = n * factorial(n - 1);
  return value;
}
// console.log(factorial(3));

function factorial(n, res = 1) {
  if (n === 1) {
    console.log(res);
    return;
  }

  factorial(n - 1, n * res);
}

// factorial(5);

function sort(arr) {
  if (arr.length === 1) return arr;

  let el = arr[arr.length - 1];
  arr.pop();
  sort(arr);

  //  passing sorted array to insert function
  // insertAscending(arr, el);
  insertDescending(arr, el);
  // if I dont return anything then alo it doesnt matter as original array will get sorted
  return arr;
}

// means insertion will be based on assuming array is sorted in asecending order
function insertAscending(arr, el) {
  if (arr.length === 1) {
    if (el >= arr[0]) {
      arr.push(el);
    } else arr.unshift(el);
    return [];
  } else if (arr.length > 1 && arr[arr.length - 1] < el) {
    arr.push(el);
    return [];
  } else if (arr.length > 1 && arr[0] > el) {
    arr.unshift(el);
    return [];
  }
  const last = arr[arr.length - 1];
  arr.pop();
  insertAscending(arr, el);
  arr.push(last);
  return [];
}

// means insertion will be based on assuming array is sorted in descending order
function insertDescending(arr, el) {
  if (arr.length === 1) {
    if (el <= arr[0]) {
      arr.push(el);
    } else arr.unshift(el);
    return [];
  } else if (arr.length > 1 && arr[arr.length - 1] > el) {
    arr.push(el);
    return [];
  } else if (arr.length > 1 && arr[0] < el) {
    arr.unshift(el);
    return [];
  }
  const last = arr[arr.length - 1];
  arr.pop();
  insertDescending(arr, el);
  arr.push(last);
  return [];
}

// const arr = [3, 1, 2, 66, 0, 5, 22, 44, 12, 19, -9, -11];
// sort(arr);
// console.log(arr);
