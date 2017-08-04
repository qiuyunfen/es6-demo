//判断数字是否是有限的
console.log(Number.isFinite(15)); // true
console.log(Number.isFinite(0.8)); // true
console.log(Number.isFinite(NaN)); // false
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(-Infinity)); // false
console.log(Number.isFinite('foo')); // false
console.log(Number.isFinite('15')); // false
console.log(Number.isFinite(true)); // false

//判读是否为nan
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN(15)) // false
console.log(Number.isNaN('15')) // false
console.log(Number.isNaN(true)) // false
console.log(Number.isNaN(9/NaN)) // true
console.log(Number.isNaN('true'/0)) // true
console.log(Number.isNaN('true'/'true')) // true

console.log(Number.isInteger(15))//true
console.log(Number.isInteger(15.0))//true
console.log(Number.isInteger('14'));//false
console.log(Number.isInteger(true));//false

//ES5使用如下方式模拟
(function(global) {
    //console.log(global.isFinite);
    var global_isFinite = global.isFinite;
    Object.defineProperty(Number, 'isFinite', {
        value: function isFinite(value) {
            return typeof value === 'number' && global_isFinite(value);
        },
        configurable: true,
        enumerable: false,
        writable: true
    });

    var global_isNaN = global.isNaN;
    Object.defineProperty(Number, 'isNaN', {
        value: function isNaN(value) {
            return typeof value === 'number' && global_isNaN(value);
        },
        configurable: true,
        writable: true,
        enumerable: false
    });

    var floor = Math.floor;
    Object.defineProperty(Number, 'isInteger', {
        value: function isInteger(value) {
            return typeof value === 'number' && global_isFinite(value) && floor(value) === value;
        },
        configurable: true,
        writable: true,
        enumerable: false
    })
})(this);


Number.parseInt('12.34');//12
Number.parseFloat('12.34#');//12.34

//极小值，用于表示计算的误差
Number.EPSILON;

//javascript最大可表达数字,JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点）
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991

//isSafeInteger()表示value是否在MAX_SAFE_INTEGER和MIN_SAFE_INTEGER范围内
Number.isSafeInteger('a') // false
Number.isSafeInteger(null) // false
Number.isSafeInteger(NaN) // false
Number.isSafeInteger(Infinity) // false
Number.isSafeInteger(-Infinity) // false

Number.isSafeInteger = function(value) {
    return typeof value === 'number' &&
    Math.round(value) === value && 
    value <= Number.MAX_SAFE_INTEGER && value >= Number.MIN_SAFE_INTEGER;
}

console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER - 1)) // false
console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER)) // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)) // true
console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)) // false

//去除小数部分
console.log(Math.trunc(2.3));//2
console.log(Math.trunc(-0.123));//-0
//对于不是数值的，先使用Number转换为数字
console.log(Math.trunc('12.45'));//12
//对于空值和无法转换为数字的，返回NaN
console.log(Math.trunc(NaN));//NaN
console.log(Math.trunc('true'));//NaN
console.log(Math.trunc());//NaN




