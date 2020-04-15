function pseudohash(str) {
       
    let hash = 0;
    let tableau = str.split('')
    tableau.forEach(element => {
       hash =  (hash +15) * element.charCodeAt(0)
    });
    // for (let i = 0; i < str.length; i++) {
    //     hash =  * str.(i);
    // }

    return hash % (256*256)
}


console.log(pseudohash("Bonjour"))
console.log(pseudohash("Bonjour."))
console.log(pseudohash("Bonjoru"))
console.log(pseudohash("Bonjiur"))
console.log(pseudohash("Bonjour"))
console.log(pseudohash("Bonjour, bienvenus dans la formation"))