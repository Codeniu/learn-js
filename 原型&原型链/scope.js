var value = 1;

function foo() {
  console.log(value);
}

function bar() {
  var value = 2;
  foo();
}

bar();

// 结果是 1

//什么是作用域 https://github.com/mqyqingfeng/blog/issues/3

/**
 * 1.JavaScript 采用词法作用域也就是静态作用域
 * 2.函数的作用域在函数定义的时候就决定了
 *
 */
