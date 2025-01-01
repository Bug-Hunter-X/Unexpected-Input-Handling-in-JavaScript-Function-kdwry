function foo(a, b) {
  // Check for null or undefined values
  if (a === null || a === undefined || b === null || b === undefined) {
    return 0; 
  }

  // Check if the inputs are numbers
  if (typeof a !== 'number' || typeof b !== 'number') {
    return NaN; // Return NaN for non-numeric input
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 0
console.log(foo(1, null)); // Output: 0
console.log(foo(null, null)); // Output: 0
console.log(foo(undefined, 2)); // Output: 0
console.log(foo(1, undefined)); // Output: 0
console.log(foo('abc', 2)); // Output: NaN
console.log(foo(1, 'def')); // Output: NaN