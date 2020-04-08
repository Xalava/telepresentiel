function estPalindromeRecursif(mot) {
    console.log({mot})
    if (mot.length <=1){
        return true
    } else {
        return mot[0]==mot[mot.length-1] && estPalindrome(mot.substr(1,mot.length-2))
    }
}

function estPalindrome(phrase){
    let mot = phrase.trim()
    return estPalindromeRecursif(mot)
}

console.log("\t", estPalindrome(""))
console.log("A\t", estPalindrome("A"))
console.log("BA\t", estPalindrome("BA"))
console.log("BOB\t", estPalindrome("BOB"))
console.log("ANNA\t", estPalindrome("ANNA"))
console.log("ANKA\t", estPalindrome("ANKA"))