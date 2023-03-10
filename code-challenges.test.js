// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

const fibLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// describe("fiboSeq", () => {
  // it("takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
  //   expect(fiboSeq(fibLength1)).toEqual("[1, 1, 2, 3, 5, 8]")
  //   expect(fiboSeq(fibLength2)).toEqual("[1, 1, 2, 3, 5, 8, 13, 21, 34, 55]")

//   })
// })

// b) Create the function that makes the test pass.

// pseudo code:
// Input: a number number that indicates de leghth of the Fibonacci sequence
// Ouput: the sum of the current index plus the last to come up with the next value of the following index
// create a function "fiboSeq" that take a number as a parameter
// create an array "fibo" as the beginning of the sequence
// in for loop have the iteration start with sum of the first two indexes and .push() to incorporate the sum of the indexes as the value for the next index and so on.

const fiboSeq = (num) => {
  var fibo = [1, 1]
  for (let i = 2; i < num; i++) {
    fibo.push(fibo[i - 1] + fibo[i - 2])
  }return fibo

}

console.log(fiboSeq(fibLength1));
// --->[ 1, 1, 2, 3, 5, 8 ]

// console.log(fiboSeq(fibLength2))
// --->[1,  1,  2,  3,  5, 8, 13, 21, 34, 55]


// --------------------2) Create a function that takes in an object and returns an array of the values sorted from least to greatest.
// Hint: Check out this resource: Object.values() https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]


// describe("l2g", () => {
//   it("takes in an object and returns an array of the values sorted from least to greatest.", () => {
//     expect(fiboSeq(studyMinutesWeek1)).toEqual("[15, 15, 20, 30, 30, 60, 90]")
//     expect(fiboSeq(studyMinutesWeek2)).toEqual("[10, 15, 20, 45, 60, 65, 100]")

//   })
// })

// b) Create the function that makes the test pass.

// pseudo code:
// input: takes an array
// output: an array of the sorted values in an object
// create a function l2g that takes an array as a parameter
// use the static method Object.values() on the array to print the values in an array then use built-in method .sort() with given parameter to sort from least to greatest "a-b"

const l2g = (array) =>{
  return Object.values(array).sort((a,b) => a-b)
}
// console.log(l2g(studyMinutesWeek2));

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// a) Create a test with expect statements for each of the variables provided.

const accountTransactions1 = [100, -17, -23, -9]
// Expected output: [100, 83, 60, 51]

const accountTransactions2 = [250, -89, 100, -96]
// Expected output: [250, 161, 261, 165]

const accountTransactions3 = []
// Expected output: []

// describe("trans", () => {
//   it("akes in an array and returns an array of the accumulating sum. An empty array should return an empty array.", () => {
//     expect(fiboSeq(accountTransactions1)).toEqual("[100, 83, 60, 51]")
//     expect(fiboSeq(accountTransactions2)).toEqual("[250, 161, 261, 165]")
//     expect(fiboSeq(accountTransactions3)).toEqual("[]")


//   })
// })

// b) Create the function that makes the test pass.

// pseudo code:
// input: takes an array
// output: the array's accumulated sum as it goes into the next index
// create a function "trans" that takes an array as a function
// declared where the index iteration will start
// using .map() on the arry bring the sum of the values iterated by the next index. 

const trans = (array)=> {
  let i=0
  sum = array.map((value)=>i += value)
  return sum
  
}


// console.log(trans(accountTransactions3));