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