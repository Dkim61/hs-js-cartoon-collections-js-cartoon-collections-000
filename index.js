function dwarfRollCall(dwarves) {
  var dwarfList = ''
    for (let i = (dwarves.length / 2); i < dwarves.length; i++) {
      dwarfList += (`${i + 1}. ${dwarves[i]} `)
    }
    return dwarfList
}

function summonCaptainPlanet(planeteerCalls){
  var newPlanetList = []
   for (let i = 0; i < planeteerCalls.length; i++) {
     newPlanetList.push(`${planeteerCalls[i].toUpperCase()}!`)
   }
   return newPlanetList
}

function longPlaneteerCalls(words) {
  for (let i = 0; i < words.length; i++){
    if (words[i].length > 4) {
      return true
    }
  }
  return false
}
//// why does the order of true/ false matter?
//// when the question asks for "any", you should avoid using false within the For Loop
function findTheCheese(foods) {
  for (let i = 0; i < foods.length; i++) {
    if(foods[i] === "cheddar") {
      return "cheddar"
    } else if (foods[i] === 'gouda') {
      return "gouda"
    } else if (foods[i] === 'camembert') {
      return "camembert"
    } else if (foods[i] === 'swiss') {
      return "swiss"
    }
  }
  return "no cheese!"
}



/// startsWithB(words)
///
var words = ["butter", "apple", "bread", "cheese"]

function startsWithB(words){
  var wordsWithB = []
    for (let i = 0; i < words.length; i++){
      if (words[i][0] === 'b') {
        wordsWithB.push(words[i])
      }
    }
  return wordsWithB
}



