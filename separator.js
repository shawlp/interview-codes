/**
 * 将小数点前的数字，每3个就添加,
 * @param {*} num
 */
function seperator(num) {
  return num.replace(/\d+/, function(n) {
    return n.replace(/(\d)(?=(\d{3})+$)/g, function($1) {
      return `${$1},`;
    });
  });
}

console.log(seperator("12211111123456.75689"));
