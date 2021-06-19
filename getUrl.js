/**
 * 获取?后面的参数，以对象的结果返回
 * @param {*} url
 */
function getUrl(url) {
  let str = url.slice(url.indexOf("?") + 1, url.indexOf("#")).split("&");
  const result = {};
  str.forEach(item => {
    const [property, value] = item.split("=");
    result[property] = value ?? "";
  });
  return result;
}

const result = getUrl("http://sample.com/?a=1&b=2&c=xx&d#hash");
console.log("result", result); // { a: '1', b: '2', c: 'xx', d: '' }
