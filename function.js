function reverseString(str){
    return str.split('').reverse().join('')
}
//console.log(reverseString("hello"));

function replace(str,charToReplace,charReplacement){
    let result = "";
    for (let i = 0;i < str.length; i += 1){
        if(str[i] === charToReplace){
            result += charReplacement;
    } else {
        result += str[i];
    }
}
  return result;

}
console.log(replace("hello","l","maybe123"));

function stringLengthEven(str){
   return str.length %2===0;
}
console.log(stringLengthEven("hello"));
console.log(stringLengthEven("hell"));

function doubleChar(str) {
let result ='';
for(let i = 0; i < str.length; i += 1){
    result +=str[i] + str[i];
}
return result
}
console.log(doubleChar('phuntsho wangmo'));



function testEven(n) {
  if( n % 2 === 0){
    return true;
  }
  else{
     return false;
  }
}
console.log(testEven(5));

function maps(x){
  let result=[];
  for (let i = 0; i < x.length; i += 1){
    result.push(x[i]+ x[i]);
  }
return result;
}
console.log(maps([1, 2, 3]));

function helloFunction(name) {
  return `Hello, ${name}`
}
console.log(helloFunction("Mr. Dorji"))

function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while (principal < desired) {
    let yearlyInterest = principal * interest;
    let taxPaid = yearlyInterest * tax;
    principal += yearlyInterest - taxPaid;
    years++;
  }
  return years;
}
console.log(calculateYears(1000, 0.05, 0.18, 1100));

var humanYearsCatYearsDogYears = function(humanYears) {
 let dogYears=0;
 let catYears=0;
  
  if(humanYears === 1){
    dogYears=15;
    catYears=15;
    
  }else if (humanYears === 2){
    dogYears=24;
    catYears=24;
  }else{
    dogYears = 24 + (humanYears -2)*5;
    catYears = 24 + (humanYears - 2)*4;
  }
    
  return [humanYears, catYears, dogYears];
}
console.log(humanYearsCatYearsDogYears(1));


function basicOp(operation, value1, value2){
  let result = 0;
  if(operation === "+"){
     result = value1 + value2;
     }
  if(operation === "-"){
     result = value1 - value2;
     }
  if(operation === "*"){
     result = value1 * value2;
     }
  if(operation === "/"){
     result = value1 / value2;
     }
  return result;
}
console.log(basicOp("+", 4, 7))

var countSheep = function (num){
  if(!num) return ''
let sheep="";
  for(let i = 1; i <= num; i +=1){
    sheep += i + ' sheep...'
    }
  return sheep;
}
console.log(countSheep(4));

function DNAtoRNA(dna) {
  let result = "";
  for (let i=0; i<dna.length; i++){
    if(dna[i]==="T"){
      result += "U";
  }else{
    result += dna[i];
  }
}
  return result;
  // create a function which returns an RNA sequence from the given DNA sequence
}
console.log(DNAtoRNA("GACCGCCGCC"));
console.log(DNAtoRNA("GCAT"))

function twoHighest(arr) {
  let unique = [...new Set(arr)];
  unique.sort((a, b) => b - a);
  return unique.slice(0, 2);

}
console.log(twoHighest([50,45,50,40,55]))

function findDifference(a, b) {
  const cubiod1 = a[0]*a[1]*a[2];
  const cubiod2 = b[0]*b[1]*b[2];
  let result = Math.abs(cubiod1 -cubiod2);
  return result;
}
console.log(findDifference([2,3,4],[4,5,6]))

function arrayPlusArray(arr1, arr2) {
  const arrayCombine = arr1.concat(arr2);
  let sum = 0;
  for(let i = 0; i < arrayCombine.length; i += 1){
    sum += arrayCombine[i]
  }
  return sum; 
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

//Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
//  Be careful, there shouldn't be a space at the beginning or the end of the sentence!

//Example
//['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
//ANSWER 
function smash (words) {
    return words.join(" ");
 }
 console.log(smash(["hello", "world", "is", "great"]));

 
/*The cockroach is one of the fastest insects. 
Write a function which takes its speed in km per hour and returns it in cm per second,
 rounded down to the integer (= floored).

For example:
1.08 --> 30 */
//ANSWER
function cockroachSpeed(s){
    return Math.floor(s * 27.7778);
}
console.log(cockroachSpeed(1.08));

//trying to push sth from main branch

/* Your classmates asked you to copy some paperwork for them.
You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

Example:
n= 5, m=5: 25
n=-5, m=5:  0 */

function paperwork(n, m) {
  if(n <= 0 || m <= 0){
    return 0;
  }else 
    return n *m;
 }
 console.log(paperwork(5,5));

function addBinary(a,b){
  return (a+b).toString(2)
}
console.log(addBinary(5,6));

function addBinary(a,b) {
  let sum = a + b;
  let result = sum.toString(2);
  return result ;
}
console.log(addBinary(5,3));

function accum(s) {
	let result = ' ';// this will store the final string
for(let i = 0; i < s.length; i += 1){
  // Get the current character
  result += s[i].toUpperCase() + s[i].toLowerCase().repeat(i);// Uppercase first, then lowercase repeated i times
  if (i !== s.length -1){// Add dash after every part except the last
    result +='-';
  }
}
return result;
}
console.log(accum('hello world'));

function findNeedle(haystack) {
  for(let i=0; i < haystack.length; i += 1){
  if(haystack[i] ==="needle"){ 
    return "found the needle at position " + i;
}
}
  }
  console.log(findNeedle(['jung','cool','needle','junk']));

  function correct(string)
{
	let result= '';
  for(let i = 0; i < string.length; i += 1){
    if (string[i] === "5" ){
      result = result + 'S';
    }else if (string[i] === "0"){
      result = result + 'O';
    }else if (string[i] === "1"){
      result = result + 'I';
    }else{
      result = result + string[i];
    }
    } 
  return result;
   }

   console.log(correct('l0nd0n'));

   function repeatStr (n, s) {
  return s.repeat(n);
}
console.log(repeatStr (5,"t"));

// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.



function otherAngle(a, b) {
  return 180 - (a+b);
}
console.log(otherAngle(60,60));

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.


function areYouPlayingBanjo(name) {
     if(name[0].toLowerCase() ==='r'){
       return name + " plays banjo";
     }
  else{
    return name+ " does not play banjo";
  }
}
console.log(areYouPlayingBanjo('Rame'));
console.log(areYouPlayingBanjo('jigme'));

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

const rps = (p1, p2) => {
  const choice = ['rock','paper','scissors'];
  const a = p1.toLowerCase();
  const b = p2.toLowerCase();

  if (!choice.includes(a) || !choice.includes(b)) {
    throw new Error('Invalid input: use "rock", "paper", or "scissors".');
  }

  if (a === b) {
    return 'Draw!';
  }

  const winsAgainst = {
    rock: 'scissors',
    scissors: 'paper',
    paper: 'rock'
  };

  if (winsAgainst[a] === b) {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};

console.log(rps('scissors', 'rock'));

function noSpace(x){
return x.replace(/\s+/g, "");
}
console.log(noSpace('h e l l o j s ef'));
/*Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example (Input => Output):
35231 => [1,3,2,5,3]
0     => [0]  */

//How it works
/*n.toString() → converts number to a string (e.g., 35231 → "35231")

.split('') → splits string into array of characters → ["3", "5", "2", "3", "1"]

.reverse() → reverses the array → ["1", "3", "2", "5", "3"]

.map(Number) → converts each character to number → [1, 3, 2, 5, 3] */


function digitize(n){
  let result = n.toString().split('').reverse().map(Number);
  return result;
}
console.log(digitize(765432));

/*Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/

function greet(name){
  return "Hello, " + name + " how are you doing?";
}
console.log(greet("Jigme"));

//Implement a function which convert the given boolean value into its string representation.

function booleanToString(b){
  return b.toString();
}
console.log(booleanToString(true));
console.log(booleanToString(false)); 

function dnaStrand(dna){
  let result = '';
  for(let i = 0; i < dna.length; i += 1){
    if(dna[i] ==='A') result += 'T';
    else if (dna [i] === 'T') result += 'A';
    else if(dna [i] === 'C') result += 'G';
    else if (dna [i] === 'G') result += 'C';
  }
  return result;
}
function validatePIN (pin) {
  if(pin.length !== 4 && pin.length !== 6)return false;
  
  for(let i = 0; i < pin.length ; i +=1){
    if(pin[i] < '0' || pin[i] > '9')return false;
  }
  return true;
    }
console.log(validatePIN ("2345"));

//Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
//Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

function hello(name) {
 if(!name || name ===''){
   return "Hello, World!";
 }
  let firstLetter = name[0].toUpperCase();
  let rest = name.slice(1).toLowerCase();
  let fixedName = firstLetter + rest;
  return 'Hello, ' + fixedName+ '!';
}
console.log(hello("john"));
console.log(hello(""));         // "Hello, World!"
console.log(hello());           // "Hello, World!"

// In this kata you will create a function that takes a list of non-negative 
// integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
   return l.filter(item => typeof item === 'number');
}
console.log(filter_list([1,3,4,5,'a','b','c']));

// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him.

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
   if( n >= 10){
     return "Great, now move on to tricks";
   }else{
     return "Keep at it until you get it";
   }  
}
console.log(hoopCount(7));

// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// Examples
// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// for(i = 0; i <= n; i += 1) means

// ***This is the rule that controls how long the loop will run.

// As long as i is less than or equal to n, the loop keeps running.

// If i becomes greater than n, the loop stops.



function powersOfTwo(n){
  let result = [];
 for(i = 0; i <= n; i += 1){
  result.push(Math.pow(2, i));
 }
  return result;
}
console.log(powersOfTwo(0));