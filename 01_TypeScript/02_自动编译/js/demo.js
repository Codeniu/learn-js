var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = '';
        this.lastName = '';
        this.fullName = '';
        this.firstName = firstName;
        this.lastName = lastName;
        this.fullName = this.firstName + '_' + this.lastName;
    }
    Person.prototype.showName = function () {
        return this.fullName;
    };
    return Person;
}());
var xiaohong = new Person('xiao', 'hong');
console.log(xiaohong.showName());
// 通过查看编译后的ja文件可以看到， TypeScript 中的类只是一个语法糖，本质商还是js的函数
