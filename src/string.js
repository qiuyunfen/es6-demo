//增加for...of循环方法，可遍历大于0xFFFF的码点
let text = String.fromCodePoint(0x20BB7);

for(let codePoint of text) {
    console.log(codePoint);
}

