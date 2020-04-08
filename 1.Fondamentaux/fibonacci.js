function fibonacci(n) {
	let suite = []
	for (let  i = 0; i < n; i++) {
		if ( i <= 1 ) {
			suite[i]=1
		} else {
			suite[i] = suite[i-1] + suite[i-2]
		}
	}
	return suite
}
    
function dessinerLapins(nombre) {
	let lapins = ""
	for(x = 1; x <= nombre;x++){
		lapins += "🐇🐇"
	}
	return lapins
}

liste = fibonacci(8)
for (let x = 0; x < liste.length; x++) {
	console.log(`Generation ${x+1},\til y a ${liste[x]}\tcouples de lapins-> ${dessinerLapins(liste[x])}`)
}

