const assert = require("assert");
const myModule = require("..");
assert.equal(myModule.fib(3), 2);
console.log("ok");
