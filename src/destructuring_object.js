let {foo, bar} = {foo: 'abc', bar: 'qwe'};
console.log(foo);

//对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
let {a, b} = {b: 'abc', a: 'qwe'};
console.log(a);

let {baz} = {foo: 'abc', bar: 'qwe'};
console.log(baz);

//如果变量名与属性名不一致,必须写成下面的格式
var {foo: barz} = {foo: 'abc', bar: 'qwe'};
console.log(barz);

//解构赋值嵌套对象
let obj = {
    p: [
        'Hello',
        {y: 'world'}
    ]
}

let {p: [x, {y: name}]} = obj;
console.log(x);
console.log(name);

//对象解构赋值也可以指定默认值，默认值生效当且仅当对象属性值为undefined
var {x1, y = 3} = {x1: 1};
console.log(y);

let {x2 = 1} = {x2: null};
console.log(x2);//null

//将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来就会方便很多
let {log, sin, cos} = Math;

//数组是特殊的对象
let arr = [1,2,3];
let {0: first, [arr.length-1]: last} = arr;
console.log(first);