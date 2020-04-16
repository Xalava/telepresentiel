// Cryptographie symétrique sur un octet

// Operations binaires
// ou (or)
console.log(1 | 1)
console.log(1 | 0)
// ou exclusif (xor)
console.log(1 ^ 0)
console.log(1 ^ 1)

// Chiffrement et déchiffrement d'une lettre
let lettre = "a"
let lettreBin = Buffer.from(lettre)
let cle = Buffer.from("k")

console.log("lettre \t\t\t",lettre)
console.log("lettre binaire\t",lettreBin)
console.log("cle binaire\t", cle)

let lettreChiffre = Buffer.from([lettreBin[0] ^ cle[0]])
console.log("lettre chiffré\t",lettreChiffre)
console.log("lettre déchiffré\t",  String.fromCharCode(cle[0] ^ lettreChiffre[0]))