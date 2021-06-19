/**
 * 使用场景：window.scroll,resize
 * 防抖：等触发完事件n秒内不再触发事件，才执行方法
 * 考虑一个场景，有一个按钮点击会触发网络请求，但是我们并不希望每次点击都发起网络请求，而是当用户点击按钮一段时间后没有再次点击的情况才去发起网络请求
 */
function debounce(func, wait) {
  let timeout;
  return function(...args) {
    timeout && clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
}
