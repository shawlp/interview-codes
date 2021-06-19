/**
 * jsonp原理：
 * 创建一个script标签，src为http://www.a.com?property=value&callback=callbackName
 * 插入body当中
 * 在window上定义callbackName方法
 */
function jsonp({ url, params, callbackName }) {
  const generateUrl = () => {
    let dataSrc = "";
    for (key in params) {
      dataSrc += `${key}=${params[key]}`;
    }
    dataSrc += `&callback=${callbackName}`;
    return `${url}${dataSrc}`;
  };
  return new Promise((resolve, reject) => {
    const scriptEle = document.createElement("script");
    scriptEle.src = generateUrl();
    scriptEle.defer = true;
    document.body.appendChild(scriptEle);
    window[callbackName] = data => {
      resolve(data);
      document.removeChild(scriptEle);
    };
  });
}
