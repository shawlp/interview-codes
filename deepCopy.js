/**
 * 只考虑数组和对象，没考虑循环引用(Map解决)，symbol，set，map，function，date...
 * @param {*} obj
 */
function deepCopy(obj) {
  if (typeof obj !== "object") return;
  const newObj = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
}

const a = {
  a: {
    b: {
      c: 1
    }
  }
};

const b = deepCopy(a);

console.log(b, b === a);
