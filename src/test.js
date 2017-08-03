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