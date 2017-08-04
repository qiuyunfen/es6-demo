//函数参数也可使用解析赋值
let arr = [[1,2],[3,4]].map(([a, b]) => a+b);
console.log(arr);//[3,7]

//函数参数使用解析赋值可设置默认值
function move({x = 0, y = 0} = {}) {
    return [x, y];
}

console.log(move({}));//[0,0]
console.log(move({x: 1}));//[1,0]
console.log(move({x: 9, y: 8}));//[9,8]

//下列代码是为move函数的参数设置默认值，而不是为x和y设置默认值
function move1({x, y} = { x: 0, y: 0 }) {
  return [x, y];
}

console.log(move1({x: 3, y: 8})); // [3, 8]
console.log(move1({x: 3})); // [3, undefined]
console.log(move1({})); // [undefined, undefined]
console.log(move1()); // [0, 0]

//当参数为undefined时，触发默认值
var result = [1, undefined, 3].map((x = 'yes') => x);
console.log(result);