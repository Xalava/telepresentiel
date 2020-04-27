// Comparaison de la version Buffer et la version hexadécimale d'un condensat (hash)
const crypto = require('crypto')

let hashBuffer = crypto.createHash('sha256').update('lala').digest()
let hashString = crypto.createHash('sha256').update('lala').digest('hex')

console.log({hashBuffer})
console.log({hashString}) 

//Concaténation de la chaine correspondant au Buffer et de la chaîne "1"
console.log(hashBuffer+1) 
//Concaténation du Buffer du condensat et de l'octet 01
console.log(Buffer.concat([hashBuffer, Buffer.from([1])]))
//Concaténation de la représentation hexadécimale du condensat et de la chaîne "1"
console.log(hashString+1)

// Différence entre interpréter la chaine de caractère et le nombre représenté en hexadécimal
console.log(Buffer.from("04FF"))
console.log(Buffer.from([04,255]))
console.log(Buffer.from("04FF","hex"))
