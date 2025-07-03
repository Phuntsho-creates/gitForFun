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