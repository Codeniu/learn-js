var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 01 number
var num1 = 123;
var num2 = 7; // 二进制0b开头
var num3 = 511; // 八进制0o开头
var num4 = 0x9ab; // 十六进制0x开头
// 02 数组
var arr1 = [1, 2, 3];
var arr2 = ['1', '2']; // 泛型 Array<类型>
// 03 元组类型
// 拥有不同类型的数组，数组的个数，以及对应位置的值的类型要与定义时保持一致
var arr3 = ['xiaohong', 13];
// 04 枚举
var ColoR;
(function (ColoR) {
    ColoR[ColoR["red"] = 0] = "red";
    ColoR[ColoR["green"] = 1] = "green";
    ColoR[ColoR["blue"] = 2] = "blue";
})(ColoR || (ColoR = {}));
// 05 void
function sayHi() {
    console.log('sya hi');
}
// 06 object
function fn(obj) {
    return __assign({ status: 'done' }, obj);
}
console.log(fn(new String('xiaohong')));
