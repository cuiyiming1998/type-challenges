// 判断是否是一个PromiseLike
// 如果是 判断返回值是否是一个PromiseLike (infer U)
// 如果是 循环调用MyAwaited
// 否则返回U
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never
