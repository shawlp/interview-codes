function getType(value) {
  // 数据为null的情况
  if (value === null) {
    return value + "";
  }
  // 数据为引用类型的情况
  if (typeof value === "object") {
    return Object.prototype.toString.call(value).slice(8, -1);
  } else {
    // 基本数据类型及函数
    return typeof value;
  }
}

console.log(getType(Symbol(1)));
