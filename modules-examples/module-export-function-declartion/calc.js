var math=require('./math.js');

console.log(math.add(1,2));

console.log(math.subtract(1,2));

// This should throw error as multiply has not been exported.
console.log(math.multiply(1,2));
