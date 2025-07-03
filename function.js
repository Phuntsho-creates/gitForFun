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
