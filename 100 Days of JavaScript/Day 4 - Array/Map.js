// Arrow function
// map((element) => { /* … */ })
// map((element, index) => { /* … */ })
// map((element, index, array) => { /* … */ })
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
