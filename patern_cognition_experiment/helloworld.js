console.log('Hello, World')
console.log(1 + 2)

const sum = 1 + 2
console.log(sum)

let sum2 = 1
sum2 = sum2 + 2
console.log(sum2)

const numbers = [1, 2, 3, 4, 5]
let sum3 = 0
for (const n of numbers) {
    sum3 += n
    console.log(sum3)
}

const data = '1, 2, 3, 4, 5'
let sum4 = 0

for (const n of data.split(',')) {
    sum4 += Number.parseInt(n)
}

console.log(sum4)