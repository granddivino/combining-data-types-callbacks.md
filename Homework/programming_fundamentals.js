//*** Section 1 ***

// - Write a ~1 sentence summary for each one

// * **DRY**
// Basically talking about exactly what it stands for, don't repeat yourself code wise. There's more than one way to code something, try other ways.
// * **KISS**
// Keep your code simple, it makes it easier to read and modify.
// * **Avoid creating a YAGNI**
// Don't add unnecessary functions until you need it, not just when you foresee that you'll need it.
// * **Do the simplest thing that could possibly work**
// Unless you know there's no way around it, it's basically what it says. Do the simplest thing that will work!
// * **Don't make me think**
// The code should be easily read and understood without trying too hard to see what it's supposed to do.
// * **Write code for the maintainer**
// Any code that works and is worth passing on to someone should be something that someone else can understand.
// * **Single responsibility principle**
// A function or class should have responsibility over a single part of a program's functionality.
// * **Avoid premature optimization**
// Don't try to make it the best code it can be unless it works first. That's not the priority.
// * **Separation of concerns**
// Seperating computer program into sections so that each section addresses a seperate set information.

// - Which ones surprise you (if any)?
// None of them really surprise me, it's about what I would expect from programming principles.
// - Which one is currently giving you the most struggle?
// If there's any that I may be a bit unsure about understanding, it's knowing the difference between single resposiblity principle, and seperation of concerns. They sound like the same thing

//Comment each line of this code and describe what it is doing. Feel free to run this code and add console.logs to help you figure it out:

const f = l => { //Constant F is equal to value of L for this function
  let es = 0, p = 0, c = 1, n = 0 //Declaring variables
  while (c <= l) { //While C is less then or equal to 1 this function will run on a loop
    n = c + p; //The Function during the while loop is running is that N = 1 + 0 which is 1
    [c, p] = [n, c] // Reassigning C to be N and P to be C
    es += (c % 2 === 0) ? c : 0 //If C is even, add C to ES, otherwise don't add anything to ES
  }
  return es //Return the value oF ES
}

console.log(f(55))

// At first we may strive for the shortest code possible. But we really should be striving for readable 
// code that is easy to maintain. Compare the same solution with more semantic variable names 
// (feel free to use this one to help you figure out what is happening in this function:


    const f2 = (limit) => {
      let evenSum = 0;
      let previous = 0;
      let current = 1;
      while (current <= limit) {
        let next = current + previous;
        previous = current;
        current = next;
        if (current % 2 === 0) {
          evenSum += current;
        }
      }
      return evenSum;
    }
    
    
    console.log(f2(55))

//**Answer with comments:**

//- In keeping with one of our programming principals (write code for the maintainer): What would have been a more semantic name for this function (hint: this is a problem we had for either lab or hw and is considered a _classic_ ) - are there any other variable names or things that would make this code easier to read and understand?
// Answer:  I think that since this is the even summed fibonacci problem so a good function name would be something like "evenSumFib"
// Expanding out the variable names would help too like in the second example, and getting rid of the array reassignment since that kind of confused me.
// Trying to remember what single letters represents is harder for me to read/remember personally.
// I could sort of tell what it was doing, but not really any context as to why, especially with just single letters. Whoever maintained this before might want to do some commenting on that.

//- If you started a new job and your project was to expand the functionality of this function by allowing a second argument and then based on that second argument, returning the sum of even or odd numbers, which code would you rather start working with `f` or `f2`?
// Answer: Absolutely F2

//- Finally, the 'shorter' code style doesn't use semi-colons, except for the fourth line. Remove this semi-colon! Run the code, is this semi-colon necessary?
// Answer: Apparently it is necessary in this case, it doesn't run without it.
// MDN states "An expression needs to be preceded by a semicolon or it may be used to execute a function on the previous line."
