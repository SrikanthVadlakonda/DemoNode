const http= require('http')

const { addNumber, subtractNumber, divideNumber,multiplyNumber}= require('./localModules')

console.log(addNumber(10,5))
console.log(subtractNumber(10,5))
console.log(multiplyNumber(10,5))
console.log(divideNumber(10,5))