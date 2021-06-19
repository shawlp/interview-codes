/**
 * 节流
 * 持续触发事件，每隔一段时间，只执行一次事件
 * 滚动事件中会发起网络请求，但是我们并不希望用户在滚动过程中一直发起请求，而是隔一段时间发起一次
 */
// function throttle(func, wait) {
//   let time = 0;
//   return function(...args) {
//     const now = Date.now();
//     if (now - time > wait) {
//       time = Date.now();
//       func.apply(this, args);
//     }
//   };
// }

function throttle(func, wait) {
  let flag = true;
  return function(...args) {
    if (!flag) {
      return;
    }
    flag = false;
    setTimeout(() => {
      func.apply(this, args);
      flag = true;
    }, wait);
  };
}
