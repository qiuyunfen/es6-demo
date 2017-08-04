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
})(this);




