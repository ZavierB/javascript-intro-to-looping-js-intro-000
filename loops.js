
let array = [];

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if(i === 1){
      array.concat('I am 1 strange loop.')
    }
    else {
      array.concat(`I am ${i} strange loops.`)
    }
  }
  return array
}
