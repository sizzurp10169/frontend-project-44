#!/usr/bin/emv node

import readlineSync from 'readline-sync'
import getName from '../src/cli.js'
import { getRandomInt } from '../src/cli.js'

export default function isEvenGame(name) {
    console.log("Answer \'yes\" if the number is even, otherwise \"no\".")
    console.log(`Question ${Math.random()}`)

    let totalCount = 0
    const maxCount = 3

    while (totalCount < maxCount) {
        const randomNumber = getRandomInt
        const isEven = randomNumber % 2 === 0
        const correctAnswer = isEven ? 'yes' : 'no'

        console.log(`Question: ${randomNumber}`)
        const userAnswer = readlineSync.question('Your answer: ').toLowerCase().trim()

        if (userAnswer === correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
            console.log(`Let's try again, ${name}!`)
            return false
        }
    }
    console.log(`Congratulations, ${name}!`)
    return true
}

isEvenGame(getName())