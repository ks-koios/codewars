// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing 
// second character of the final pair with an underscore ('_').

// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
  if (str.length === 0) {
    return []
  }
  
  const a = str.match(/.{1,2}/g)
  if (a[a.length - 1].length === 1) {
    a[a.length - 1] += '_'
  }
  return a
  
}
