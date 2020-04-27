
// A partir du code d'Eli
const express = require('express');
const fetch = require('node-fetch');

const entierAleatoire = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomPort = entierAleatoire(5000, 6000);
const app = express();

let nom = process.argv[2]
app.get('/', (req, res) => {
    res.send(` ${nom} est bien là`)
    console.log("On vient de recevoir une demande")
})

app.listen(randomPort, console.log(`Noeud ${nom} lancé sur le port ${randomPort}`))

for (let i = 5000; i < 6000; i++) {
    if(i != randomPort){
        fetch(`http://127.0.0.1:${i}`)
            .then(r=>r.text())
            .then(resultat => console.log(resultat))
            .catch(()=> { }); 
    }
}