function getNowDate() {
  const myDate = new Date();
  const year = myDate.getFullYear(); //获取当前年
  const mon = myDate.getMonth() + 1; //获取当前月
  const date = myDate.getDate(); //获取当前日
  const hours = myDate.getHours(); //获取当前小时
  const minutes = myDate.getMinutes(); //获取当前分钟
  const seconds = myDate.getSeconds(); //获取当前秒
  const now =
    year + "-" + mon + "-" + date + " " + hours + ":" + minutes + ":" + seconds;
  return now;
}

class TaskPool {
  constructor() {
    this.taskQueue = [];
  }
  delayRun(delayTime, callback) {
    console.log(getNowDate(), "register", delayTime, callback.name);
    this.taskQueue.push(setTimeout(callback, delayTime));
    return this;
  }
}

const instance = new TaskPool();

instance
  .delayRun(3000, function task1() {
    console.log(getNowDate(), "run log 1");
  })
  .delayRun(2000, function task2() {
    console.log(getNowDate(), "run log 2");
  })
  .delayRun(1000, function task3() {
    console.log(getNowDate(), "run log 3");
  });

setTimeout(() => {
  instance.delayRun(10, function task4() {
    console.log(getNowDate(), "run log 4");
  });
}, 4000);
