//字符串被转换为类似数组的对象，可进行解构赋值
let [a, b, c] = 'hel';
console.log(a);
console.log(b);
console.log(c);

//字符串包含length属性
 let {length: len} = 'hello';
 console.log(len);