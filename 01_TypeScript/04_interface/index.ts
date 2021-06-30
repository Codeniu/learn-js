// 01 interface 是对 Object 的属性和行为的抽象
interface IPerson {
  readonly id: number
  name: string
  age: number
  sex?: string
}

interface IFly {
  fly()
}

interface IFlyPerson extends IPerson, IFly {
}

class Person implements IPerson{
  readonly id:number
  name:string
  age:number
  sex?:string
  
  constructor(id:number,name:string,age:number,sex?:string){
    this.id = id
    this.name = name
    this.age = age
    this.sex = sex
  }

  sayHi(){
    console.log('你好');
    
  }
}

class Student extends Person{
  constructor(id:number,name:string,age:number,sex?:string){
    super(id,name,age,sex)
  }

  sayHello(){
    console.log('nihao')
    super.sayHi()
  }
}

const xiaoming = new Student(1001,'小明',13)
xiaoming.sayHello()


