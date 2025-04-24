export default 
function merge <T extends object, U extends object> (objA: T, objB: U) : T & U {
  return Object.assign(objA, objB);
}

console.log(merge ({name: 'Bloom'}, {type: "bull", age: 5}));
console.log(merge ({name: 'Wave', color: 'white'}, {type: "cow", age: 2, milking: true}));