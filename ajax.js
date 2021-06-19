/**
 * ajax原理:
 * 1.判断是否有XMLHttpRequest对象
 * 2.open方法设置请求方法，url
 * 3.设置请求头：Accept: application/json
 * 4.onReadyStateChange: readyState === 4 & [200, 304].includes(status)
 * 5.send发送出去
 * @param {*} url 传入的请求接口地址
 */
const getJson = function(url) {
  return new Promise((resolve, reject) => {
    const xhr = XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHttp");
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onReadyStateChange = function() {
      if (xhr.readyState !== 4) return;
      if (xhr.status === 200 || xhr.status === 304) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    };
    xhr.send();
  });
};
