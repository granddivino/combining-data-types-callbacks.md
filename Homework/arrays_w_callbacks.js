//*** Section 3 ***

// A few array methods use callbacks. For example .map - .map takes each element of an array and does something to it and returns a new arrays.
// But what should it do? Multiply everything by 5? Capitalize everything? If .map had a hard-coded thing it always did with an array, it wouldn't be very flexible.
// By allowing a callback to determine what happens to each array element we get a lot of flexibility and we can do some really powerful things.

// Two arrays to work with

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog']
// The first question is for the numbers array. The second question is for the words array.
// You don't have to write an answer to the thought questions.

// Every

// Determine if every number is greater than or equal to 0
const biggerThanOne = (value) => value >= 0

console.log(nums.every(biggerThanOne)) //Returns True, so yes

// determine if every word shorter than 8 characters
const shorterThanEight = (word) => word.length < 8

console.log(panagram.every(shorterThanEight)) //Returns True, so yes

// Filter

// filter the array for numbers less than 4
const lessThanFour = (number) => number < 4

console.log(nums.filter(lessThanFour))

// filter words that have an even length

const evenLength = (word) => {
    if (word.length % 2 === 0) {
        return word
    }
}

console.log(panagram.filter(evenLength))

// Find

// Find the first value divisible by 5
let divByFive = nums.find((found) => {
    if (found % 5 === 0){
      return found
    }
  })
  
  console.log(divByFive);
// find the first word that is longer than 5 characters
let longerThanFive = panagram.find((found) => {
    if (found.length > 5){
      return found
    }
  })
  
  console.log(longerThanFive); //Returns undefined because no words are longer than 5 characters

// Find Index

// find the index of the first number that is divisible by 3
let indexOfNum = nums.findIndex((num) => {
    if (num % 3 === 0) {
      return num;
    }
  })

console.log(indexOfNum) //Returns index 2 which is 3

// find the index of the first word that is less than 2 characters long
let indexOfWord = panagram.findIndex((word) => {
    if(word.length < 2) {
      return word;
    }
  })
  
  console.log(indexOfWord); //Returns -1. None of the words in the array are less than 2 

// For Each

// console.log each value of the nums array multiplied by 3
let multiplyBy3 = nums.forEach((number)=> {
    console.log(number * 3);
  })

// console.log each word with an exclamation point at the end of it
panagram.forEach((word)=> {
    console.log(word + '!');
  })

// Map

// make a new array of each number multiplied by 100
const newNums = nums.map(number => number * 100)
console.log(newNums)

// make a new array of all the words in all uppercase
const exclaim = panagram.map(word => word.toUpperCase());
console.log(exclaim)


// Some

// Find out if some numbers are divisible by 7
nums.some(num => num % 7 === 0) //Returns true since 7 is the only number divisible by 7

// Find out if some words have the letter a in them
panagram.some(word => word.includes('a')) //Returns true

