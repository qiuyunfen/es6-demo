let a = [];
//let 定义的变量只在当前块级作用域有效，每轮循环都是一个新的变量i
for(let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    }
}
a[6]();//6

//for是父级作用域，循环体内部是单独的子作用域
for(let i = 0; i < 3; i++) {
    let i = 'abc';
    console.log(i);
}

//不存在变量提升
console.log(foo);//undefined
var foo = 'var';

//console.log(bar);//bar is not defined
let bar = 'let';

//如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错
var tmp = 'abc';
if(true) {
    //TDZ开始
   // tmp = 1;//ReferenceError
   // console.log(tmp);//ReferenceError

    let tmp;////TDZ结束
    console.log(tmp);
    tmp = 'qwe';
    console.log(tmp);
}
//es6 块级作用域
function f1() {
    let n = 5;
    if(true) {
        let n = 10;
    }
    console.log('block' + n);
}
f1();

//const变量具有与let一样的特性，块级作用域，tdz，不能变量提升，不能重复命名
//同时，const指定的变量的（内存地址）不能改变，因此将const设置为对象时要小心
const const_var = {};
const_var.foo = 'abc';
console.log(const_var.foo);

//const_var = {};//TypeError: Assignment to constant variable
