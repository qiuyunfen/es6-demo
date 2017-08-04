//字符串被转换为类似数组的对象，可进行解构赋值
let [a, b, c] = 'hel';
console.log(a);
console.log(b);
console.log(c);

//字符串包含length属性
 let {length: len} = 'hello';
 console.log(len);

//当进行解构赋值时，右边表达式如果不是对象，会默认进行转对象操作
//由于undefined和null无法转为对象，所以对它们进行解构赋值，都会报错
let {toString: s} = 123;
console.log(s === Number.prototype.toString); 

let {toString: s1} = false;
console.log(s1 === Boolean.prototype.toString);