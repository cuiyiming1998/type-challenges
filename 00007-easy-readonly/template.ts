export type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

// interface t {
//   a: string,
//   b: string
// }
// type r = keyof t  // 'a' | 'b'

// js

function readonly(obj) {
  const result = {}
  for (const key in obj) {
    result['readonly' + key] = obj[key]
  }
  return result
}

// 1. 返回一个对象
// 2. 遍历obj (ts -> interface)
// 3. 加上readonly关键字
// 4. 通过key获取interface里的值
