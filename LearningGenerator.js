// https://exploringjs.com/es6/ch_generators.html

function* genFunc() {
    // (A)
    console.log('First');
    yield;
    console.log('Second');
}

const genObj = genFunc();

genObj.next();
// Output: First
genObj.next();
// output: Second
// =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-==-=-=-=-=-=-=-=-=
const object1 = {
    property1: 42,
    property2: 13,
  };
  
  const array1 = [];
  
  console.log(Reflect.ownKeys(object1));
  // Expected output: Array ["property1", "property2"]
  
  console.log(Reflect.ownKeys(array1));