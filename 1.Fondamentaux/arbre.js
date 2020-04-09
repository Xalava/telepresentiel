class Noeud {
    constructor(valeur) {
      this.valeur = valeur
      this.gauche = undefined
      this.droite = undefined
    }

    ajouterValeur(v){
        if (this.gauche === undefined){
            this.gauche = new Noeud(v)
        } else {
            if (this.droite === undefined) {
                this.droite = new Noeud(v)
            } else {
                this.gauche.ajouterValeur(v)
                //A faire : améliorer l'emplacement de la nouvelle valeur
                //Choisir aléatoirement gauche ou droite
            }
        }
    }
    afficherNoeud(){
        //Afficher le noeud et ses enfants
    }
}
   
class Arbre {
    constructor(valeur) {
        this.racine = new Noeud(valeur)
    }
    ajouterValeur(valeur) {
        this.racine.ajouterValeur(valeur)
    }
    afficherArbre() {
        
        // A faire: Une fonction d'affichage de l'arbre qui appelle une fonction afficherNoeud()
    }
}

let monArbre = new Arbre(6)

console.log(monArbre)

monArbre.ajouterValeur(4)
monArbre.ajouterValeur(7)
monArbre.ajouterValeur(9)
monArbre.ajouterValeur(1)

console.log(monArbre)