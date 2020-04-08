
function fibonaciRecursif(nombre){
	if (nombre <= 1){
		return 1
	} else {
		return fibonacciRecursif(nombre-1)+fibonacciRecursif(nombre-2)
	}
}

let generation = 5
console.log(`De façon récursive, on a ${fibonacciRecursif(5)} couples de lapins à la génération ${generation}`)