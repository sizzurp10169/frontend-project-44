import readlineSync from 'readline-sync'

function greet() {
  console.log('Welcome to the Brain Games!')
  const name = readlineSync.question('May I have your name? ')

  console.log(`Hello, ${name}!`)
  return name
}

function isEven(answer, num) {
  if (num % 2 === 0) return 'Correct'
}

export { isEven, greet }
