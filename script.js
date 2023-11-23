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
const multiplesOfTen = (num) => {
  for (i=10; i<=num; i+=10) {
    console.log(i)
  }
}

multiplesOfTen(320)


// 3.   Write a function that takes bill amount and item price and says how many quarters they'd get in return

const numOfQuartersReturned = (bill, price) => {
  // to get the number of quarters returned we first need to get
  // the total change:

  let change = bill - price

  let coinAmount = (change % 1).toFixed(2)

  // to get the number of quarters we take
  // the coinAmount and divide it by 0.25
  // the number of quarters is the quotient

  let numOfQuarters = Math.floor(coinAmount/0.25)

  console.log(`You receive ${numOfQuarters} quarters in your change`)

}

numOfQuartersReturned(14, 11)

//4.    Write a function that prints out how many bills you would recieve in change after paying a certain amount.  Return in as large denominations as possible. Parameters should be amount paind and amount cost

const BillsAndCoinsReturned = (amtPaid, amtCost) => {
  // this is similar to the quarters returned function except this is more involved.

  // for bills we have denominations of:
  // $100, $50, $20, $10, $5, and $1
  
  // for coins we have denominations of:
  // $0.25, $0.10, $0.05, $0.01

  // We are leaving out $2 bills, 50 cent pieces, and dollar coins for simplicity.

  // First we consider $100 bills received, then $20 bills received, and so on down to pennies received.

  let change = amtPaid - amtCost

  console.log(`You receive $${change.toFixed(2)} as change`)

  // from our previous function, 
  let coinAmount = (change % 1).toFixed(2)

  // now we just need to get the wholeDollarsAmount:

  wholeDollarsAmount = Math.round(change - coinAmount)

  // how many 100s do we get back?
  let hundreds = Math.floor(wholeDollarsAmount/100)
  // console.log(hundreds)
  // how many 20s?
  // well for 20s, we see what we are left with after taking out the 100s from the change

  if(hundreds > 1) {
    console.log(`You receive ${hundreds} hundred dollar bills`)
  } else if(hundreds > 0) {
    console.log(`You receive 1 hundred dollar bill`)
  }

  wholeDollarsAmount -= hundreds*100

  let twenties = Math.floor(wholeDollarsAmount/20)

  if(twenties > 1) {
    console.log(`You receive ${twenties} twenty dollar bills`)
  } else if(twenties > 0) {
    console.log(`You receive 1 twenty dollar bill`)
  }

  // for 10s, we see what we are left with after taking out the 100s and the 20s
  wholeDollarsAmount -= twenties*20

  let tens = Math.floor(wholeDollarsAmount/10)

  if(tens > 1) {
    console.log(`You receive ${tens} ten dollar bills`)
  } else if(tens > 0) {
    console.log(`You receive 1 ten dollar bill`)
  }

  // and so on...

  wholeDollarsAmount -= tens*10

  let fives = Math.floor(wholeDollarsAmount/5)

  if(fives > 1) {
    console.log(`You receive ${fives} five dollar bills`)
  } else if(fives > 0) {
    console.log(`You receive 1 five dollar bill`)
  }

  wholeDollarsAmount -= fives*5

  let ones = wholeDollarsAmount

  if(ones > 1) {
    console.log(`You receive ${ones} one dollar bills`)
  } else if(ones > 0) {
    console.log(`You receive 1 one dollar bill`)
  }

  // and very similar logic for the coins received:

  let quarters = Math.floor(coinAmount/0.25)

  if(quarters > 1) {
    console.log(`You receive ${quarters} quarters`)
  } else if(quarters > 0) {
    console.log(`You receive 1 quarter`)
  }

  coinAmount -= quarters*0.25

  let dimes = Math.floor(coinAmount/0.10)

  if(dimes > 1) {
    console.log(`You receive ${dimes} dimes`)
  } else if(dimes > 0) {
    console.log(`You receive 1 dime`)
  }

  coinAmount -= dimes*0.10

  let nickels = Math.floor(coinAmount/0.05)

  if(nickels > 1) {
    console.log(`You receive ${nickels} nickels`)
  } else if(nickels > 0) {
    console.log(`You receive 1 nickel`)
  }

  coinAmount -= nickels*0.05

  let pennies = Math.floor(coinAmount/0.01)

  if(pennies > 1) {
    console.log(`You receive ${pennies} pennies`)
  } else if(pennies > 0) {
    console.log(`You receive 1 penny`)
  }

}

BillsAndCoinsReturned(1.21, 1.21)



// 5.   Write a program that uses console.log to print all the numbers from 1 to 100 with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead. When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).