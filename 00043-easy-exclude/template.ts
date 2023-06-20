// 如果T在U中 return never移除U 否则返回T
// Extract相反
type MyExclude<T, U> = T extends U ? never : T
