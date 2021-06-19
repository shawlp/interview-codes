const a = "123214";

/** 字符串转成数组之后反转再转成字符串，与原来字符串对比是否相等 */
function isHuiwenNumber(str) {
  return (
    str
      .split("")
      .reverse()
      .join("") === str
  );
}

console.log(isHuiwenNumber(a));
