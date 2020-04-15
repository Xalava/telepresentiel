const crypto = require('crypto')

function codeVerification(message){
    let code = ''
    return code
}

function verifierCode(message,code){
    return true 
}

function vanite(debut, message){
    let nonce = 0

    return nonce
}
function verifierVanite(debut, message, nonce){
    
    
    return true
}


let message = "Bonjour à tous"
let data = Buffer.from(message)
let hash = crypto.createHash('sha256').update(data)
console.log(`Le message est \'${message}\'. Le condensat est ${hash.digest('hex')}`)

let code = codeVerification(message)
console.log(`Code de vérification :\' ${code}\', validité : ${verifierCode(message,code)}`)

let debutHash = 'ab'
console.log(`Un hash débutant par \'${debutHash}\' peut être obtenu en ajoutant ${vanite(debutHash,message)} au message`)