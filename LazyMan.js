/**
 * 设计LazyMan，主要考察事件队列（栈实现）
 * 巧妙的使用next，串联所有待执行的回调函数组成的队列，每次弹出在头部的方法，最终队列为空，执行完所有方法
 * @param {*} name
 */
function LazyMan(name) {
  if (!(this instanceof LazyMan)) {
    return new LazyMan(name);
  }
  const cb = next => {
    console.log(`Hi This is ${name}!`);
    next();
  };
  this.cbs = [cb];
  // 当所有方法调用之后立马调用这个宏任务，巧妙！
  setTimeout(() => {
    this.next();
  }, 0);
}
LazyMan.prototype.eat = function(food) {
  const cb = next => {
    console.log(`Eat ${food}~`);
    next();
  };
  this.cbs.push(cb);
  return this;
};
LazyMan.prototype.sleepFirst = function(time) {
  const cb = next => {
    setTimeout(() => {
      next();
    }, time * 1000);
  };
  this.cbs.unshift(cb);
  return this;
};
LazyMan.prototype.sleep = function(time) {
  const cb = next => {
    setTimeout(() => {
      next();
    }, time * 1000);
  };
  this.cbs.push(cb);
  return this;
};
LazyMan.prototype.next = function() {
  if (this.cbs.length <= 0) return;
  const first = this.cbs.shift();
  first(this.next.bind(this));
};

// LazyMan("Tony");

// LazyMan("Tony")
//   .sleep(10)
//   .eat("lunch");

LazyMan("Tony")
  .eat("lunch")
  .sleep(5)
  .eat("dinner");
