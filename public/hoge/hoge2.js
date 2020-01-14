const print = console.log
const sum = array => {
  const add = (a, b) => a + b
  return array.reduce(add)
}
const sum2 = array => {
  let acc = 0
  for (let n of array) {
    acc += n
  }
  return acc
}
const sum3 = array => {
  let acc = 0
  for (let i = 0; i < array.length; i += 1) {
    acc += array[i]
  }
  return acc
}
print(sum([1, 2, 3]))
