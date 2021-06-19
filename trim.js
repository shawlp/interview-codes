/** 以空格开头或结尾的用空串代替 */
const trim = str => str.replace(/^\s+|\s+$/g, "");

console.log(trim(" 123 "));
