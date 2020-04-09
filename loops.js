
// let array = [];

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if(i === 1){
      array += 'I am 1 strange loop.'
    }
    else {
      array += `I am ${array[i]} strange loops.`
    }
  }
  return array
}
