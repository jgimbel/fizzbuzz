module.exports = function fizzbuzz(length) {
  const outputs = Array.from(
    { length },
    (_, idx) => (++idx % 15 === 0)
      ? 'FizzBuzz'
      : (idx % 3 === 0)
        ? 'Fizz'
        : (idx % 5 === 0)
          ? 'Buzz'
          : idx
  )
  outputs.map( val => console.log(val))
  return outputs
}

if(require.main === module){
  module.exports(100)
}