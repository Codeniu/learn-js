# Record

[返回目录](readme.md)

Record 会将一个类型的所有属性值都映射到另一个类型上并创造一个新的类型

常用的格式如下：

```ts
type proxyKType = Record<K,T>
```

demo

```ts
type petsGroup = 'dog' | 'cat' | 'fish';
interface IPetInfo {
    name:string,
    age:number,
}

type IPets = Record<petsGroup, IPetInfo>;

const animalsInfo:IPets = {
    dog:{
        name:'dogName',
        age:2
    },
    cat:{
        name:'catName',
        age:3
    },
    fish:{
        name:'fishName',
        age:5
    }
}

```
