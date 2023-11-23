console.log(`
Q.  Write a while loop for the given output:
      10, 30, 50, 70, 90
      20, 40, 60, 80, 100

      -This could be acheived a few ways, be creative`)

console.log(`
A.  When I first saw this question I
    interpreted it as generating a
    list of 10-100 counting by tens:`)

console.log(`
In that case we can use the following code:

let n = 10;
while(n <=100){
  console.log(n)
  n += 10
}

This generates the following:
`)

let n = 10;
while(n <=100){
  console.log(n)
  n += 10
}

console.log(`
However, if the desired output is:

10, 30, 50, 70, 90
20, 40, 60, 80, 100

shown exactly like that in the console using a while loop.

The first line starts at 10 and increments by 20 separated by commas until 90.

Likewise the second line starts at 20 and increments by 20 separated by commas until 100

`)


console.log(`
We can use the following code:

n = 10;
let s = ''
while(n <=90){
  if (n !=90){
    s += n + ', '
  } else {
    s += n
  }
n += 20
}
console.log(s)

n = 20;
s = ''
while(n <=100){
  if (n !=100){
    s += n + ', '
  } else {
    s += n
  }
n += 20
}
console.log(s)

Which generates the exact list:

`)

n = 10;
let s = ''
while(n <=90){
  if (n !=90){
    s += n + ', '
  } else {
    s += n
  }
n += 20
}
console.log(s)

n = 20;
s = ''
while(n <=100){
  if (n !=100){
    s += n + ', '
  } else {
    s += n
  }
n += 20
}
console.log(s)




console.log(`
Q.  Write a while loop that prints all numbers
    from 500 - 800 only if they are divisible
    by 4.`)

n = 500
while(n<=800){
  if(n % 4 == 0) {
    console.log(n)
  }
  n++
}

// 1.   Write an function that contains an if/else statement for the following requirements:
// - If student gets 80 or higher: console log  You did a good job
// - If students get 70 or above: console log Keep trying
// - If students get 60 or above: console log ehhhh
// - If students get 55 or above: console log Not to good
// // - Any grade lower than 55 is Bad Grade But You'll Get Em Next Time

const gradeComment = (grade) => {
  if (grade >= 80) {
    console.log(`You did a good job`)
  } else if (grade >= 70) {
    console.log(`Keep trying`)
  } else if (grade >= 60) {
    console.log(`ehhh`)
  } else if (grade >=55) {
    console.log(`Not to good`)
  } else {
    console.log(`Bad Grade But You'll Get Em Next Time`)
  }
}

gradeComment(93)
gradeComment(72)
gradeComment(65)
gradeComment(58)
gradeComment(23)

// 2.   Write a function that prints out multiples of 10 up to a given input (argument)

// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return


//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  Return in as large denominations as possible. Parameters should be amount paind and amount cost

// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).