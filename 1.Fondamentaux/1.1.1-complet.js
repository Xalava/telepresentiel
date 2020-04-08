const readline = require('readline')

const rli = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log("Devinez le nombre entre 1 et 100")

const solution = Math.round(Math.random()*99+1)

console.log({solution})

rli.on('line', entree => {
    const nombrePropose = parseInt(entree);
    if (nombrePropose < solution){
        console.log("C'est plus que ", nombrePropose)
    } else if (nombrePropose > solution){
        console.log("C'est moins que ", nombrePropose)
    } else if (nombrePropose == solution){
        rli.close()
        console.log("Vous avez gagné!")
    } else {
        console.log("Entrée illisible")
    } 
})
