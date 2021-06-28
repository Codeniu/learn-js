function Animal(name, fake) {
  this.name = name;
  this.fake = fake;
  this.print = function () {
    console.log(`Hello,I'm a ${name},I fake like this:${fake}`);
  };
}

function Dog(name, fake) {
  Animal.call(this, name, fake);
  this.family = "canidae";
}

function Cat(name, fake) {
  Animal.call(this, name, fake);
  this.family = "felidae";
}

const caffeCat = new Cat("咖啡猫", "喵喵喵");
const teddyDog = new Dog("泰迪狗", "汪汪汪");

caffeCat.print();
teddyDog.print();
