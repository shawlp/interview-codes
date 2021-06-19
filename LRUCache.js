/**
 * LRU Cache淘汰算法
 * 最多存储n对kv
 * 如果大于n个，则随意删除一个已经过期的KV
 * 如果没有过期的KV，则按照LRU的规则剔除一个KV
 * 查询时如果过期返回空
 */
class LRUCache {
  constructor(capacity, intervalTime) {
    this.capacity = capacity;
    this.intervalTime = intervalTime;
    this.cache = new Map();
  }
  get(key) {
    if (!this.cache.has(key)) {
      return null;
    }
    const tempValue = this.cache.get(key);
    this.cache.delete(key);
    if (Date.now() - tempValue.time > this.intervalTime) {
      return null;
    }
    this.cache.set(key, { value: tempValue.value, time: Date.now() });
    return tempValue.value;
  }
  set(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    }
    if (this.cache.size >= this.capacity) {
      const keys = this.cache.keys;
      /** Map是有序的，故最长时间未被访问的值会被第一个迭代到 */
      this.cache.delete(keys.next().value);
    }
    this.cache.set(key, { value, time: Date.now() });
  }
}
