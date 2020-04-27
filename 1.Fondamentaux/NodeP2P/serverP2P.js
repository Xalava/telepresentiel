const net = require("net")

// Le port est compris entre 5000 et 6000 (exclu)
const portRange = {min: 5000, max:6000}

// On récupère le nom du noeud dans les arguments
let id = process.argv[2]

// Fonction qui envoie le nom du noeud sur un port donné
function ping(message,port){
    const client = net.createConnection(port,()=>{
        client.write(message)
        client.destroy()
    })
    client.on("error",()=>{})
}

//
function launchServer(id, port){
    const server = net.createServer( connection => {
        // Parametrage du serveur
        let message 
        connection.on('data', data =>{
            message = data.toString()
            console.log('J\'ai reçu un ping', message)
        })
        
    })

    server.listen(port)

    server.on('listening', ()=> {
        console.log(`le noeud ${id} écoute sur le port ${port}`)
        ping(id,portRange.min)   
    })

    server.on('error', (err)=>{
        if (err.code == 'EADDRINUSE'&& port < portRange.max)
            launchServer(id,port+1)
        else
            throw err
    })

}
let portAleatoire = Math.floor(Math.random()*(portRange.max-portRange.min))+portRange.min
launchServer(id,portRange.min)