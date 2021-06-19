/**
 * 使用setTimeout模拟setInterval:递归调用setTimeout,解决了setInterval的问题：每当推入宏任务事件队列的时候，都会进行判断（看上次的任务是否仍在队列中，如果有则不添加，没有则添加），会造成推入任务队列的时间不准确
 */
let timer = null;
function mockSetInterval(func, wait) {
  let interval = () => {
    func.call(this);
    timer = setTimeout(interval, wait);
  };
  timer = setTimeout(interval, wait);
}

mockSetInterval(() => {
  console.log("wait");
}, 1000);

/** 在第10s停止wait */
setTimeout(() => {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }
}, 10000);
