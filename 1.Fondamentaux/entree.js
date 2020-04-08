
console.log("Programme node pour montrer la saisie")

// Récupérer le premier paramètre après le nom du fichier  
// $ node entree lala -> lala
console.log("Parametre :", process.argv[2])

// Récupérer un nombre entré par l'utilisateur 
let input = process.stdin

input.on('data', entree => {
  console.log("entree = :", parseInt(entree))  
})

// En utilisant un module dedié à récuperer une ligne saisie par l'utilisateur
// Documentation https://node.readthedocs.io/en/stable/api/readline/
// const readline = require('readline')

// const rli = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// rli.on('line', entree => {
//     if (entree == "sortir"){
//         rli.close()
//     } else {
//       console.log("entree :",entree)
//     }
// })
