//增加for...of循环方法，可遍历大于0xFFFF的码点
let text = String.fromCodePoint(0x20BB7);

for(let codePoint of text) {
    console.log(codePoint);
}

var s = 'Hello world!';
console.log(s.includes('o')); // true
console.log(s.includes('Hello', 6));//第二个参数表示从当前位置道字符串结束

console.log(s.startsWith('Hello'));
console.log(s.startsWith('world', 6));//第二个参数表示从当前位置道字符串结束

console.log(s.endsWith('!'));
console.log(s.endsWith('Hello', 5));//针对前n个字符

//repeat
console.log('x'.repeat(3));
//小数,取整
console.log('x'.repeat(2.9));

//'x'.repeat(Infinity);//RangeError: Invalid count value
//'x'.repeat(-1);//RangeError: Invalid count value
//先取整
console.log('x'.repeat(-0.9));
//NaN等同与0
console.log('x'.repeat(NaN));
//参数如果是字符串，先转为数字
console.log('x'.repeat('3'));//xxx
console.log('x'.repeat('na'));//''