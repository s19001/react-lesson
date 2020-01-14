const print = console.log
const sum = array => {
  const add = (a, b) => a + b
  return array.reduce(add)
}
print(sum([1, 2, 3]))
