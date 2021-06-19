/**
 * 栈的应用：
 * 若是遇到（进栈，遇到)且当前栈还有元素时，将栈中元素弹出，最后看栈中是否为空，为空则是匹配的
 * */
const judgeBracketsMatch = s => {
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")" && result.length !== 0) {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }
  return !result.length;
};

// const judgeBracketsMatch = s => {
//   var stack = [];
//   var map = {
//     "(": ")",
//     "[": "]",
//     "{": "}"
//   };

//   for (var char of s) {
//     if (char in map) {
//       stack.push(char);
//     } else {
//       if (!stack.length || char != map[stack.pop()]) {
//         return false;
//       }
//     }
//   }

//   // 如果最后stack 里没有元素了， 就一定是匹配的
//   return !stack.length;
// };

console.log(judgeBracketsMatch("(())))"));
