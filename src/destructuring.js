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

//Set 结构也可使用解构赋值
let [x, y, z] = new Set(['a', 'b', 'c']);
console.log(x);

//某种数据结构具有iterator接口，都能进行解构赋值
function* fibs() {
    let a = 0;
    let b = 1;
    while(true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

let [first, second, third, fourth, fifth] = fibs();
console.log('fifth = ' + fifth);

//解构赋值允许设置默认值
let [defaultfoo = true] = [];
console.log(defaultfoo);

//注意，ES6 内部使用严格相等运算符（===），判断一个位置是否有值。所以，如果一个数组成员不严格等于undefined，默认值是不会生效的
[x = 1] = [null];
console.log(x);//null

//默认值可以引用解构赋值的其他变量，但该变量必须已经声明
[x = 1, y = x] = [];
[x = 1, y = x] = [1];
[x = 1, y = x] = [1, 2];
//x1用到y1时，y1还没有被声明
//let [x1 = y1, y1 = 1] = [];//y1 is not defined
