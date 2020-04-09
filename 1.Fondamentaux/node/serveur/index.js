console.log("Nous sommes dans le fichier principal")

const express = require('express')
const app = express()
const fetch = require('node-fetch')

const port = 3000


app.get('/',(requete,reponse)=>
    reponse.send("Bienvenue sur notre serveur")
)

app.get('/block/:block',(requete,reponse)=>{
    console.log(`vous avez demandé le block ${requete.params.block}`)
    reponse.send(`vous avez demandé le block ${requete.params.block}`)
    const url = "https://blockchain.info/rawblock/"+requete.params.block
    fetch(url)
    .then(res => res.json())
    .then(json => console.log(json));
})


app.get('/infos',(requete,reponse)=>
    reponse.send("Cette page a été faite dans le cours node")
)

app.listen(port, () => console.log(`Le serveur est lancé sur http://localhost:${port}`))