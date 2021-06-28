- 参考文章 github.com/mqyqingfeng/Blog/issues/2
-  juejin.cn/post/6934498361475072014



### 用构造函数创建一个对象

```js
https: https: function Person() {}
var person = new Person();
person.name = "Kevin";
console.log(person.name); // Kevin
```





### 构造函数，实例，实例原型的区别及联系：

```js
function Person() {

}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```

![实例与实例原型的关系图](./images/prototype2.png)

person的原型有两种表示，`person.__proto__`与`Person.prototype`



构造函数**Person**的`prototype`属性指向了一个对象，这个对象正是调用该构造函数而创建的*实例*的原型，就是person的原型。

实例**person**的`__proto__`属性指向person的原型。



到此我们知道了原型如何表示，如何拿到原型。



### 原型是什么？

可以将原型理解为一个对象，在JavaScript对象（非null）在创建时，会产生一个与之关联的对象，这个对象就是原型.





### 结论

```js
function Person() {

}

var person = new Person();

console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === Person.prototype) // true
```



![实例与实例原型的关系图](./images/prototype5.png)





### example

```js
function Person() {

}

var person = new Person();
console.log(Object.getPrototypeOf(person))


```

```
console.log(typeof Function.prototype, typeof Function)
```





### `typeof`与`instanceof`

看个例子

```js
function foo(){}
function woo(){}

var fooObj = new foo();
var wooObj = new woo();

console.log(typeof fooObj  === typeof wooObj) //true
console.log(fooObj instanceof foo) // true
console.log(wooObj instanceof foo) // false
console.log(typeof Function.prototype  === typeof Function) // true
console.log( Function.prototype instanceof Function) // false

```



#### typeof：

The **`typeof`** operator returns a string indicating the type of the unevaluated operand.

typeof操作符返回一个字符串，用于表示未赋值操作数的类型。



#### instanceof:

The **`instanceof` operator** tests to see if the `prototype` property of a constructor appears anywhere in the prototype chain of an object. The return value is a boolean value. 

`instanceof`操作符用于测试构造函数的`prototype`是否出现在对象原型链的任何位置，如果出现返回true，否则为false。



```
a instanceof b
```

判断的应该是 a 是否可以通过原型链找到 b.prototype 所指向的原型



比如：

```js
function Foo(name) {
  this.name = name;
}
var f = new Foo('nick')

f instanceof Foo // true
f instanceof Object // true

```

上述代码判断流程大致如下：

1、 `f instanceof Foo`： `f` 的隐式原型 `__proto__` 和 `Foo.prototype` ，是相等的，所以返回 `true` 。

2、 `f instanceof Object`： `f` 的隐式原型 `__proto__` ，和 `Object.prototype` 不等，所以继续往上走。 `f` 的隐式原型 `__proto__` 指向 `Foo.prototype` ，所以继续用 `Foo.prototype.__proto__` 去对比 `Object.prototype` ，这会儿就相等了，因为 `Foo.prototype` 就是一个普通的对象。

作者：尼克陈
链接：https://juejin.cn/post/6934498361475072014
来源：掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。



理解：

f instanceof Foo 这行代码可以理解为，用于，测试Foo.prototype 是否在f 的原型链中。

先看`f`的原型

`f.__proto__`,f 是Foo创建的一个实例，显而易见，`f.__proto__`指向`Foo.prototype`,所以为true

 再看：`f instanceof Object`，画出原型链，(Foo --->Person,	f--->person )



![实例与实例原型的关系图](./images/prototype5.png)

