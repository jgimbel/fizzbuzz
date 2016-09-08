const fizzbuzz = module.exports = (length)  => (
  Array.from(
    { length },
    (_, idx) => (++idx % 15 === 0)
      ? 'FizzBuzz'
      : (idx % 3 === 0)
        ? 'Fizz'
        : (idx % 5 === 0)
          ? 'Buzz'
          : idx
  )
)

if(require.main === module){
  fizzbuzz(100).map( val => console.log(val))
}