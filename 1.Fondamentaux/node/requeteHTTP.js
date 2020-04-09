const https = require('https')

const url = "https://blockchain.info/rawblock/000000000002de92d93fcb92eeb2be097af8570a70fa5a8c6df473626891c9d6"

https.get(url,res => {
    let resultat =""
    res.on("data", data =>{
        resultat += data
    })
    res.on('end', () =>{
        let resultatJSON = JSON.parse(resultat)
        console.log(resultatJSON)
    })
})

