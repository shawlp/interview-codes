/**
 * 通过promise与setTimeout结合去做sleep功能
 * @param {*} wait
 */
function sleep(wait) {
  return new Promise(resolve => {
    setTimeout(resolve, wait);
  });
}
