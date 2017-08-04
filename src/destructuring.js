//destructuring
let [a, b, c] = [1, 2, 3];

let [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
console.log(bar);
console.log(baz);

let [head, ...tail] = [1,2,3,4];
console.log(head);
console.log(tail);

//e解析不成功，结果为undefined
let [d, e] = ['a'];
console.log(e);

//不完全解构
let [f, g] = [1,2,3];
console.log(f);
console.log(g);

//前5个表达式右边转换为对象后是不可迭代的，最后一个表达式，对象本身是不能迭代的，因此会报错
//let [foo1] = 1;
//let [foo2] = false;
//let [foo3] = null;//Cannot read property 'Symbol(Symbol.iterator)' of null
//let [foo4] = undefined;//Cannot read property 'Symbol(Symbol.iterator)' of undefined
//let [foo5] = NaN;//undefined is not a function
//let [foo6] = {};

