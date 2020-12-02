
function justPrice() {

var random = Math.round(Math.random() * 500);
var userNum = 0;


for (var essai = 0; essai < 20; essai++) {

    userNum = parseInt(prompt('Entrez un nombre : '), 10);

    if (isNaN(userNum)) {
        alert('Tu pars déjà ?')
        break;
    } else if (userNum < random) {
        alert('Ce nombre est trop petit');
    } else if (userNum > random) {
        alert('Ce nombre est trop grand');
    } else {
        alert('Vous avez gagné en '+ essai +' essais !'); 
        break;
    }
}
alert('Fin du jeu !')
}

