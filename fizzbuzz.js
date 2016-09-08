const operators = {
  'Fizz': (num) => num % 3 === 0,
  'Buzz': (num) => num % 5 === 0
}

const fizzbuzz = module.exports = (length)  => (
  Array.from(
    { length },
    (_, idx) => Object.keys(operators).reduce((output, key) => output + ((operators[key](idx+1)) ? key : ''), '') || idx+1
  )
)

if(require.main === module){
  fizzbuzz(100).map( val => console.log(val))
}