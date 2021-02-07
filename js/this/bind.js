/*
 * @Author: zhouyinchi
 * @Date: 2021-01-15 14:50:31
 * @LastEditTime: 2021-01-15 15:58:46
 * @LastEditors: zhouyinchi
 * @Description: 实现 bind 方法 这个版本的 bind 在new 后，没有生成新的对象
 * from https://zhuanlan.zhihu.com/p/50539121
 * bind 是一个Function原型链中的一个属性
 * bind 是一个函数名为bind的函数 返回值也是函数
 * function.length 返回函数参数的个数
 */

Function.prototype.bindFn = function bind() {
  if (typeof this !== "function") {
    // throw new TypeError(this + "must be a function");
    console.log(123);
  }
  var self = this;
  let [target, ...args] = arguments;
  var bound = function () {
    return self.apply(target, [...args, ...arguments]);
  };
  return bound;
};

// --test--
var obj = {
  name: "1234",
};
function original(a, b) {
  console.log(this.name);
}
var bound = original.bindFn(obj,1)
bound(2);//123
var boundOri = original.bind(obj, 1);
boundOri(2);//123
var boundNew = new bound(12)//123
var boundOriNew = new boundOri();///undefined
