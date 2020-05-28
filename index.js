function dwarfRollCall(dwarves) {
  var list = '';
  for(let i = 0; i < dwarves.length; i++) {
    list += (`${i+1}. ${dwarves[i]} `)
  }
  return list
}



function summonCaptainPlanet(planeteerCalls){
  var newPlanteerCalls = [];
  for(let i = 0; i < planeteerCalls.length; i++) {
    newPlanteerCalls.push(`${planeteerCalls[i].toUpperCase()}!`)
  }
  return newPlanteerCalls
}

function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      return true
    }
  }
  return false
}
  
function findTheCheese(foods) {
  for(let i = 0; i<foods.length; i++) {
    if (foods[i] === "cheddar") {
      return "cheddar"
    }
    else if (foods[i] === "gouda") {
      return "gouda"
    }
    else if (foods[i] === "camembert") {
      return "camembert"
    }
  }
  return "no cheese!"
}
