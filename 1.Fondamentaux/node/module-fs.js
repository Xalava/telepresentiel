const fs = require('fs')

// let courses = fs.readFileSync('liste.txt','utf-8')
let courses = 'Valeur par defaut'

fs.readFile('liste.txt','utf-8',(erreur, resultat)=> {
    console.log(resultat)
    courses = resultat

})


fs.appendFile('liste.txt',"\ncornichons", (erreur)=> {
    if (erreur) throw erreur
    console.log('Information ajoutée!')
    
})

console.log(courses)
