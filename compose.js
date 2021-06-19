/**
 * compose原理：从右往左运算
 * @param  {...any} fns
 */
function compose(...fns) {
  return x => {
    return fns.reduceRight((arg, fn) => fn(arg), x);
  };
}

function add(val) {
  return val + 1;
}

function minus(val) {
  return val - 2;
}

console.log(compose(add, minus)(4));
