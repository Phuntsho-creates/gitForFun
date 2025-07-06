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