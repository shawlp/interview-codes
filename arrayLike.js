const arrlike = {
  0: 1,
  1: 2,
  length: 2
};

/** 将类数组转化成数组类型 */
const array = Array.from(arrlike);

/** 需要配置Symbol(Symbol.iterator)方法  */
// const array = [...arrlike];

// const array = Array.prototype.slice.call(arrlike);

// const array = Array.prototype.concat.apply([], arrlike);

console.log(array);
