type ArrayTypes<T> = T extends readonly (infer R)[] ? R : never
export type TupleToObject<T extends readonly any[]> = {
  [P in ArrayTypes<T>]: P
  // [P in T[number]]: P
}
