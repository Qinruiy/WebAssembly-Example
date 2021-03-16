async function loadWebAssembly(path) {
  const res = await fetch(path);
  const moduleObject = await res.arrayBuffer();
  const module = await WebAssembly.compile(moduleObject);
  const instance = new WebAssembly.Instance(module);
  return instance;
}
loadWebAssembly("./build/optimized.wasm").then((instance) => {
  const { fib } = instance.exports;
  console.log("wasm:");
  console.time();
  fib(40);
  console.timeEnd();
});

function fib(n) {
  if (n === 0) return 0;
  else if (n === 1) return 1;
  else return fib(n - 1) + fib(n - 2);
}

console.log("js:");
console.time();
fib(40);
console.timeEnd();
console.log("------");
