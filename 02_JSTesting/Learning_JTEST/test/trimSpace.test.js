import { trimSpace } from '../src/trimSpace'

// 1
test('result should remove underfine,null and space str in the list', () => {
  const groceries = ['apple', null, 'milk', undefined, 'bread', '', '  ']
  const result = ['apple', 'milk', 'bread']

  expect(trimSpace(groceries)).toStrictEqual(result)
})

// 2
test('参数不正确时', () => {
  expect(trimSpace('')).toStrictEqual('parameter must be a list')
})
