import { cons, car, cdr, toString } from 'hexlet-pairs'

const pair = cons(3, 5)
car(pair) // 3
console.log(cdr(pair))
console.log(toString(pair)) // (3, 5)

// console.log('hell1o')
// let xss = 'asda'
// console.log(xss)