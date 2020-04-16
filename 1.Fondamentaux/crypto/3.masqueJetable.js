
// Implémentation manuelle d'un programme de chiffrement et déchiffrement d'un masque jetable
const crypto = require('crypto')

const generateKeyMarc = message => {
    return crypto.randomBytes(message.length)
} 
    
const chiffrerKarim = (message, cle) => {
    let bufferMsg = Buffer.from(message)
    let messageChiffre= []
    let messageChiffreChaine = ''
        for(let i= 0; i<message.length; i++){
            messageChiffreChaine += (bufferMsg[i] ^ cle[i]).toString(16)
            messageChiffre.push(bufferMsg[i] ^ cle[i])
        }
    console.log("Chiffré, chaîne ",messageChiffreChaine)
    return messageChiffre
}  

// Message
let message = "lala"
console.log("message",message,"\t",Buffer.from(message))

// Clé
let cle = generateKeyMarc(message)
console.log("cle\t\t",cle)

// Chiffrement
let messageChiffre = chiffrerKarim(message,cle)
console.log("Chiffré, tableau", messageChiffre)
console.log("Chiffré, Buffer ", Buffer.from(messageChiffre))

// Déchiffrement