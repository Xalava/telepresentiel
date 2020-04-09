const http = require('http')
const fs = require('fs')

const port = 3000

http.createServer((requete,reponse)=>{

    console.log(requete.headers["user-agent"])

    fs.readFile('liste.txt',"utf-8",(erreur,fichier)=>{
        if(erreur) throw erreur
        reponse.write(fichier)
        reponse.end()

    })

}).listen(port)


