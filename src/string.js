//增加for...of循环方法，可遍历大于0xFFFF的码点
let text = String.fromCodePoint(0x20BB7);

for(let codePoint of text) {
    console.log(codePoint);
}

var s = 'Hello world!';
console.log(s.includes('o')); // true
console.log(s.includes('Hello', 6));//第二个参数表示从当前位置道字符串结束

console.log(s.startsWith('Hello'));
console.log(s.startsWith('world', 6));