
let array = [];

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if( array[i] === 0){
      return('I am 1 strange loop.')
    }
    else {
      return(`I am ${array[i]} strange loops.`)
    }
  }
  return array
}
