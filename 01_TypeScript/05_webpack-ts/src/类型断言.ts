;(() => {
  console.log('类型断言')

  interface Animal {
    name: string
  }

  interface Cat extends Animal {
    run(): void
  }
  interface Fish extends Animal {
    swim(): void
  }
})()
