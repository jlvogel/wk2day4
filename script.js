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