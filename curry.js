/** 函数柯里化 */
function add(a, b, c) {
  return a + b + c;
}

/**
 * 柯里化：传入的参数大于等于函数接收的参数时，直接调用原函数，否则递归调用(bind)
 * @param {*} fn
 * @param  {...any} args
 */
function curry(fn, ...args) {
  return args.length >= fn.length ? fn(...args) : curry.bind(null, fn, ...args);
}

const plus = curry(add);

console.log(plus(1)(2)(3), plus(1, 2)(3), plus(1)(2, 3), plus(1, 2, 3));
