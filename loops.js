
let array = [];

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if(i === 1){
      array.unshift('I am 1 strange loop.')
    }
    else {
      return array += `I am ${i} strange loops.`
    }
  }
  return array
}
