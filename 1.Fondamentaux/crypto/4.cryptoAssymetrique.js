// Utilisation du module crypto pour la cryptographie assymétrique
const crypto = require('crypto')

const clesRSA = crypto.generateKeyPairSync('rsa', { modulusLength: 4096});
const clesECC = crypto.generateKeyPairSync('ec', {namedCurve:'secp256k1'})