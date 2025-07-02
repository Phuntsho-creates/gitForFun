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